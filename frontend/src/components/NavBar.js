import React from 'react';
import '../App.css';

function NavBar() {
  return (
    <div id="navbar-wrap">
        <ul id="navbar-list">
            <a href="/"><li className="navbar-item">Home</li></a>
            <a href="/leaderboards"><li className="navbar-item">Leaderboards</li></a>
            <a href="/new-leaderboard"><li className="navbar-item">Create Leaderboard</li></a>
        </ul>
    </div>
  );
}

export default NavBar;