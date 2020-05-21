
import React from 'react';
import './styles/leaderboards.css';
import './styles/forms.css';

function DeleteLeaderboard(props) {

    function handleDeleteLeaderboard(event){
        event.preventDefault();

        fetch(`http://localhost:8080/leaderboards/${props.leaderboardId}`, {
            method: 'DELETE',
        })
        .then(() => window.location.href="/leaderboards")
        .catch(error => {
                console.log(error)
            })
    }

  return (
      <form onSubmit={handleDeleteLeaderboard}>
          <input className="submit-button" type="submit" value="Delete Leaderboard" />
      </form>
  );
}

export default DeleteLeaderboard;