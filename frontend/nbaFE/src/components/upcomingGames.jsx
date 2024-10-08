import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap'; 
import './UpcomingGames.css'; 

const UpcomingGames = () => {
    const gamesData = {
        '2024-10-22': [
            { teamA: 'NYK', teamB: 'BOS', time: '7:00 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg' },
            { teamA: 'MIN', teamB: 'LAL', time: '10:00 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg' },
        ],
        '2024-10-23': [
            { teamA: 'IND', teamB: 'DET', time: '7:00 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg' },
            { teamA: 'BKN', teamB: 'ATL', time: '7:30 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg' },
            { teamA: 'ORL', teamB: 'MIA', time: '7:30 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg' },
            { teamA: 'MIL', teamB: 'PHI', time: '7:30 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg' },
            { teamA: 'CLE', teamB: 'TOR', time: '7:30 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg' },
            { teamA: 'CHA', teamB: 'HOU', time: '8:00 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg' },
            { teamA: 'CHI', teamB: 'NOP', time: '8:00 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg' },
            { teamA: 'MEM', teamB: 'UTA', time: '9:00 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg' },
            { teamA: 'PHX', teamB: 'LAC', time: '10:00 PM', logoA: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg', logoB: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg' },
        ],
    };

    const [currentDate, setCurrentDate] = useState('2024-10-22');

    const todayDate = 'October 22, 2024'; 
    const tomorrowDate = 'October 23, 2024';

    
    const handleSelect = (date) => {
        setCurrentDate(date);
    };

    return (
        <div className="upcomingGames">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='btnHome'> 
                 {currentDate === '2024-10-22' ? todayDate : tomorrowDate}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleSelect('2024-10-22')}>{todayDate}</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelect('2024-10-23')}>{tomorrowDate}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className="gamesContainer">
                {gamesData[currentDate].map((game, index) => (
                    <div key={index} className="gameItem">
                        <div className="teamContainer">
                            <img src={game.logoA} alt={`${game.teamA} logo`} className="teamLogo" />
                            <span>{game.teamA}</span>
                        </div>
                        <span>vs</span>
                        <div className="teamContainer">
                            <img src={game.logoB} alt={`${game.teamB} logo`} className="teamLogo" />
                            <span>{game.teamB}</span>
                        </div>
                        <span>{game.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingGames;
