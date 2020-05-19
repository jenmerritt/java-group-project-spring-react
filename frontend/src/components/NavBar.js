import React from 'react';

function NavBar() {
  return (
    <div>
        <ul>
            <a href="/"><li>Home</li></a>
            <a href="/leaderboards"><li>All Leaderboards</li></a>
            <a href="/new-leaderboard"><li>Create Leaderboard</li></a>
        </ul>
    </div>
  );
}

export default NavBar;