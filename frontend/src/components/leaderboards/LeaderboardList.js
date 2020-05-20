import React from 'react';
import '../../App.css';
import './styles/leaderboards.css';

function LeaderboardList({leaderboards}) {
  return (
    <section className="section-wrap">
      <h1>Leadboards</h1>
      <ul className="list">
        { leaderboards.map(leaderboard => {
            return(
                <li className="list-item"><a key={leaderboard.id} href={'/leaderboards/' + leaderboard.id}>{leaderboard.title}</a></li>
            )
        }) }
      </ul>
    </section>
  );
}

export default LeaderboardList;