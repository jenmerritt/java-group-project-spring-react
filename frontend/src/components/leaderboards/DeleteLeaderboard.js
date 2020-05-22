
import React from 'react';
import './styles/leaderboards.css';
import './styles/forms.css';

function DeleteLeaderboard(props) {

    function handleDeleteLeaderboard(event){
        event.preventDefault();

        fetch(`https://how-many-points-api.herokuapp.com/leaderboards/${props.leaderboardId}`, {
            method: 'DELETE',
        })
        .then(() => window.location.href="/leaderboards")
        .catch(error => {
                console.log(error)
            })
    }

  return (
      <form onSubmit={handleDeleteLeaderboard}>
          <input className="standard-button" type="submit" value="Delete Leaderboard" />
      </form>
  );
}

export default DeleteLeaderboard;