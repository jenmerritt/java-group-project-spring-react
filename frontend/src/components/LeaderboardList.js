import React from 'react';

function LeaderboardList({leaderboards}) {
  return (
    <>
      <h1>Leadboards</h1>
      <div>
        { leaderboards.map(leaderboard => {
            return(
                <a key={leaderboard.id} href={'/leaderboards/' + leaderboard.id}><p>{leaderboard.title}</p></a>
            )
        }) }
      </div>
    </>
  );
}

export default LeaderboardList;