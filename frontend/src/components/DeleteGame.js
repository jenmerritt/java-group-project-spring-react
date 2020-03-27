import React from 'react';
import './styles/CriteriaList.css'

function DeleteGame (props) {

function deleteGame(event) {
    event.preventDefault();
    props.onGameDelete(props.selectedGame.id)
}

if(props.selectedGame != null){
return (
<form onSubmit={deleteGame}>
<input type="submit" value="Delete Game" className="delete" onClick={props.resetGameSelectionForm} />
</form>
)} return null

}

export default DeleteGame;