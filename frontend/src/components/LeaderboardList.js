import React from 'react';

function LeaderboardList({leaderboards}) {
  return (
    <>
      <div>
        { leaderboards.map(leaderboard => {
            return(
                <a key={leaderboard.id} href={'/leaderboards/' + leaderboard.id}><p>{leaderboard.title}</p></a>
            )
        }) }
      </div>
      <a href={`/new-leaderboard`}><button>Create Leaderboard</button></a>
    </>
  );
}

export default LeaderboardList;