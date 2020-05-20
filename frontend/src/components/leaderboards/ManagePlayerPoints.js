import React from 'react';

function ManagePlayerPoints(props) {

  function handleClick(event){
    
    let valueOfPoints = event.target.value;

    let pointsToUpdate = parseInt(valueOfPoints) + parseInt(props.player.points)
    
    props.updatePlayerPoints(pointsToUpdate, props.player.id)

  }

  return (
    <div className="player-buttons">
      <div className="add-buttons">
        <button className="points-button add" value="1" onClick={handleClick}>+1</button>
        <button className="points-button add" value="10" onClick={handleClick}>+10</button>
        <button className="points-button add" value="50" onClick={handleClick}>+50</button>
      </div>
      <div className="minus-buttons">
        <button className="points-button minus" value="-1" onClick={handleClick}>-1</button>
        <button className="points-button minus" value="-10" onClick={handleClick}>-10</button>
        <button className="points-button minus" value="-50" onClick={handleClick}>-50</button>
      </div>
    </div>
  );
}

export default ManagePlayerPoints;