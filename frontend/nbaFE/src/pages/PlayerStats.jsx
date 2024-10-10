import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Player from '../components/Player';

function PlayerStats() {
    const [players, setPlayers] = useState([]);
    const [dreamTeam, setDreamTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [selectedPositions, setSelectedPositions] = useState({
        PG: null,
        SG: null,
        SF: null,
        PF: null,
        C: null,
    });
    const [teamName, setTeamName] = useState('');
    const [teamId, setTeamId] = useState(null);
    const [savedTeams, setSavedTeams] = useState([]);
    const [positionFilter, setPositionFilter] = useState('');

    const positionOrder = ['PG', 'SG', 'SF', 'PF', 'C'];

    const fetchPlayers = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/players");
            setPlayers(response.data.players);
        } catch (err) {
            setError(err.message);
            console.error("Error fetching players:", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchDreamTeam = async () => {
        try {
            const response = await axios.get("http://localhost:3000/players?isDreamTeam=true");
            const dreamTeamPlayers = response.data.players || [];
            setDreamTeam(dreamTeamPlayers);
        } catch (err) {
            setError(err.message);
            console.error("Error fetching Dream Team players:", err);
        }
    };

    const fetchTeams = async () => {
        try {
            const response = await axios.get("http://localhost:3000/teams");
            setSavedTeams(response.data.teams || []);
        } catch (err) {
            setError(err.message);
            console.error("Error fetching teams:", err);
        }
    };

    const fetchTeam = async (teamId) => {
        try {
            const response = await axios.get(`http://localhost:3000/teams/${teamId}`);
            const { selectedPlayers, selectedPositions, name } = response.data;

            setTeamName(name || '');
            setTeamId(teamId);
            setSelectedPlayers(selectedPlayers || []);
            setSelectedPositions(selectedPositions || {
                PG: null,
                SG: null,
                SF: null,
                PF: null,
                C: null,
            });
        } catch (err) {
            setError(err.message);
            console.error("Error fetching team:", err);
        }
    };

    const simulateMatchup = () => {
        const userScore = Math.floor(Math.random() * 120); 
        const dreamTeamScore = Math.floor(Math.random() * 130); 

        return userScore > dreamTeamScore
            ? `Your team wins! Score: ${userScore} - ${dreamTeamScore}`
            : `Dream Team wins! Score: ${dreamTeamScore} - ${userScore}`;
    };

    useEffect(() => {
        fetchPlayers();
        fetchDreamTeam();
        fetchTeams();
    }, []);

    const isPlayerSelected = (playerId) => {
        return selectedPlayers.includes(playerId);
    };

    const handleSelectPlayer = (playerId) => {
        const player = players.find((p) => p._id === playerId);
        if (!player) return;

        const position = player.position;

        if (selectedPositions[position] === playerId) {
            setSelectedPositions((prev) => ({
                ...prev,
                [position]: null,
            }));
            setSelectedPlayers((prev) => prev.filter((id) => id !== playerId));
        } else {
            const previouslySelectedPlayer = selectedPositions[position];

            if (previouslySelectedPlayer) {
                setSelectedPlayers((prev) => prev.filter((id) => id !== previouslySelectedPlayer));
            }

            setSelectedPlayers((prev) => [...prev, playerId]);
            setSelectedPositions((prev) => ({
                ...prev,
                [position]: playerId,
            }));
        }
    };

    const saveTeam = async () => {
        const teamData = {
            name: teamName,
            selectedPlayers: [...new Set(selectedPlayers)],
            selectedPositions,
        };

        if (!teamData.name) {
            alert("Please enter a team name.");
            return;
        }

        try {
            if (teamId) {
                await axios.put(`http://localhost:3000/teams/${teamId}`, teamData);
                setSavedTeams((prevTeams) =>
                    prevTeams.map((team) =>
                        team._id === teamId ? { ...team, ...teamData } : team
                    )
                );
                alert("Team updated successfully!");
            } else {
                const response = await axios.post("http://localhost:3000/teams", teamData);
                setTeamId(response.data._id);
                setSavedTeams((prevTeams) => [...prevTeams, { ...teamData, _id: response.data._id }]);
                alert("Team created successfully!");
            }
            fetchTeams();
        } catch (err) {
            console.error("Error saving team:", err);
            alert("Error saving team.");
        }
    };

    const deleteTeam = async (id) => {
        if (!id) return;

        const confirmDelete = window.confirm("Are you sure you want to delete this team?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:3000/teams/${id}`);
            alert("Team deleted successfully!");
            fetchTeams();
            if (id === teamId) {
                resetTeamState();
            }
        } catch (err) {
            console.error("Error deleting team:", err);
            alert("Error deleting team.");
        }
    };

    const resetTeamState = () => {
        setTeamId(null);
        setTeamName('');
        setSelectedPlayers([]);
        setSelectedPositions({ PG: null, SG: null, SF: null, PF: null, C: null });
    };

    
    const filteredPlayers = positionFilter
        ? players.filter(player => player.position === positionFilter && !dreamTeam.some(dreamPlayer => dreamPlayer._id === player._id))
        : players.filter(player => !dreamTeam.some(dreamPlayer => dreamPlayer._id === player._id));

    if (loading) return <div className="loading">Loading players...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    const orderedStartingFive = positionOrder
        .map((position) => {
            const selectedPlayerId = selectedPositions[position];
            return selectedPlayerId ? players.find((p) => p._id === selectedPlayerId) : null;
        })
        .filter(Boolean);


    const orderedDreamTeam = positionOrder.map((position) => {
        return dreamTeam.find((player) => player.position === position);
    }).filter(Boolean);

    return (
        <div>
            <h2>{teamId ? `Editing Team: ${teamName}` : "Create Your Team"}</h2>
            
           
            <input
                type="text"
                placeholder="Enter your team name"
                value={teamName || ''}
                onChange={(e) => setTeamName(e.target.value)}
            />
    
           
            <div className="filterButtons">
                {positionOrder.map((position) => (
                    <button
                        key={position}
                        onClick={() => setPositionFilter(position)}
                        className={positionFilter === position ? 'active' : ''}
                    >
                        {position}
                    </button>
                ))}
                <button onClick={() => setPositionFilter('')}>Clear Filter</button>
            </div>
    
           
            <Player
                info={filteredPlayers} 
                onSelect={handleSelectPlayer}
                selectedPlayers={selectedPlayers}
                isPlayerSelected={isPlayerSelected}
            />
    
  



            {/* StartingFive */}
            <div className="startingFive">
                <h2>Your Starting Five: </h2>
                <div className="startingFivePlayers">
                    {orderedStartingFive.map((player) => (
                        <div className="startingFivePlayer" key={player._id}>
                            <img src={player.imageurl} alt={player.name} className="startingFiveImage" />
                            <div>
                                <h4>{player.name}</h4>
                                <p>{player.team}</p>
                                <p>Position: {player.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {orderedStartingFive.length < 5 && (
                    <p>Select {5 - orderedStartingFive.length} more players to complete your starting five.</p>
                )}
                {orderedStartingFive.length === 5 && <p>Your starting five is complete!</p>}
            </div>
    
            <button 
                onClick={() => {
                    if (orderedStartingFive.length === 5) {
                        alert(simulateMatchup());
                    } else {
                        alert("Please complete your starting five to simulate a matchup.");
                    }
                }}
            >
                Simulate Matchup
            </button>
           
          
            <button onClick={saveTeam}>
                {teamId ? 'Update Team' : 'Create Team'}
            </button>
           
            <div className="startingFive">
                <h2>The Dream Team: </h2>
                <div className="startingFivePlayers">
                    {orderedDreamTeam.map((player) => (
                        <div className="startingFivePlayer" key={player._id}>
                            <img src={player.imageurl} alt={player.name} className="startingFiveImage" />
                            <div>
                                <h4>{player.name}</h4>
                                <p>{player.team}</p>
                                <p>Position: {player.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    
           
    
          
            <h2>Saved Teams</h2>
            <div className="savedTeams">
                {savedTeams.map((team) => (
                    <div key={team._id} className="savedTeam">
                        <h3>{team.name}</h3>
                        <button onClick={() => fetchTeam(team._id)}>Edit</button>
                        <button onClick={() => deleteTeam(team._id)}>Delete</button>
                        {team.selectedPlayers && team.selectedPlayers.length > 0 && (
                            <div className="teamPlayers">
                                <h4>Players:</h4>
                                <ul className="playerList">
                                    {team.selectedPlayers.map((playerId) => {
                                        const player = players.find((p) => p._id === playerId);
                                        return player ? (
                                            <li key={playerId} className="playerItem">
                                                <img src={player.imageurl} alt={player.name} className="teamPlayerImage" />
                                                {player.name} ({player.position})
                                            </li>
                                        ) : null;
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default PlayerStats;
