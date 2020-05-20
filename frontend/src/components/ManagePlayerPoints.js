import React, {useState} from 'react';

function ManagePlayerPoints(props) {

  function handleClick(event){
    
    let valueOfPoints = event.target.value;

    let pointsToUpdate = parseInt(valueOfPoints) + parseInt(props.player.points)

    if (!pointsToUpdate) {
      return
    }
    
    props.updatePlayerPoints(pointsToUpdate, props.player.id)

  }

  return (
    <>
        <button value="1" onClick={handleClick}>+1</button>
        <button value="10" onClick={handleClick}>+10</button>
        <button value="50" onClick={handleClick}>+50</button>
        <button value="-1" onClick={handleClick}>-1</button>
        <button value="-10" onClick={handleClick}>-10</button>
        <button value="-50" onClick={handleClick}>-50</button>
    </>
  );
}

export default ManagePlayerPoints;