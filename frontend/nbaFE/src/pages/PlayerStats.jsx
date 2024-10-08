import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Player from '../components/Player';

function PlayerStats() {
  const [players, setPlayers] = useState([]);
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

  const positionOrder = ['PG', 'SG', 'SF', 'PF', 'C']; 

  const fetchPlayers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/players");
      setPlayers(response.data.players);
      console.log("Players fetched from DB:", response.data.players); 
    } catch (err) {
      setError(err.message);
      console.error("Error fetching players:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleSelectPlayer = (playerId) => {
    const player = players.find((p) => p._id === playerId);
    if (!player) return;

    const position = player.position;

    
    const alreadySelected = selectedPlayers.includes(playerId);

    if (alreadySelected) {
    
      setSelectedPlayers((prev) => prev.filter((id) => id !== playerId));
      setSelectedPositions((prev) => ({
        ...prev,
        [position]: null, 
      }));
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

  if (loading) return <div className="loading">Loading players...</div>;
  if (error) return <div className="error">Error: {error}</div>;

 
  const orderedStartingFive = positionOrder.map((position) =>
    selectedPositions[position] ? players.find((p) => p._id === selectedPositions[position]) : null
  ).filter(Boolean); 

  return (
    <div>
      <Player info={players} onSelect={handleSelectPlayer} selectedPlayers={selectedPlayers} />
      <div className="starting-five">
        <h2>Your Starting Five</h2>
        <div className="starting-five-players">
          {orderedStartingFive.map((player) => (
            <div className="starting-five-player" key={player._id}>
              <img src={player.imageurl} alt={player.name} className="starting-five-image" />
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
    </div>
  );
}

export default PlayerStats;
