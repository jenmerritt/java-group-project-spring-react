import React from 'react';

function DeleteGame (props) {

function deleteGame(event) {
    event.preventDefault();
    props.onGameDelete(props.selectedGame.id)
}

if(props.selectedGame != null){
return (
<form onSubmit={deleteGame}>
<input type="submit" value="Delete game" className="form-submit" />
</form>
)} return null

}

export default DeleteGame;