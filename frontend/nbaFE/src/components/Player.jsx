import React from 'react';
import './Player.css';

function Player({ info, onSelect, selectedPlayers = [] }) { // Frantzy Remember this is an empty arrany
  return (
    <div className="playerCards">
      <h1>Player Statistics</h1>
      <div className="cardContainer">
        {info.length > 0 ? (
          info.map((player) => (
            <div className={`playerCard ${selectedPlayers.includes(player._id) ? 'selected' : ''}`} key={player._id}>
              <img src={player.imageurl} alt={player.name} className="playerImage" />
              <h2>{player.name}</h2>
              <p>Team: {player.team}</p>
              <p>Position: {player.position}</p>
              <p>Jersey Number: {player.jerseyNumber}</p>
              <p>Championships: {player.championships}</p>
              <p>PPG: {player.PPG}</p>
              <p>RPG: {player.RPG}</p>
              <p>APG: {player.APG}</p>
              <p>BPG: {player.BPG}</p>
              <p>SPG: {player.SPG}</p>
              <p>FGP: {player.FGP}</p>
              <input
                type="checkbox"
                checked={selectedPlayers.includes(player._id)}
                onChange={() => onSelect(player._id)}
                className="playerCheckbox"
              />
            </div>
          ))
        ) : (
          <p>No players found.</p>
        )}
      </div>
    </div>
  );
}

export default Player;
