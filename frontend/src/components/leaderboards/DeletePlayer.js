
import React from 'react';
import './styles/leaderboards.css';
import './styles/forms.css';

function DeletePlayer(props) {

    function handleSubmit(event){
        event.preventDefault();

        props.handleDeletePlayer(props.playerId)
    }

  return (
      <form id="delete-form" onSubmit={handleSubmit}>
          <input className="delete-button" type="submit" value="Delete" />
      </form>
  );
}

export default DeletePlayer;