import React from 'react';
import '../App.css';

function NavBar() {
  return (
    <div id="navbar-wrap">
        <h2>How Many Points?</h2>
        <ul id="navbar-list">
            <li className="navbar-item"><a href="/">Home</a></li>
            <li className="navbar-item"><a href="/leaderboards">Leaderboards</a></li>
            <li className="navbar-item"><a href="/new-leaderboard">Create Leaderboard</a></li>
        </ul>
    </div>
  );
}

export default NavBar;