import React from 'react';
import './styles/CriteriaList.css'

function CriteriaList({ selectedGame, onCriteriaClick, onGameDelete }) {

  function handleEvent(event) {
    onCriteriaClick(event.target.value)
  }

  if (selectedGame != null && selectedGame.hasOwnProperty('criterias')) {
    return (
      <>
        <h1 className="game-title">{selectedGame.title}</h1>
        <ul className="criteria-list">
          {selectedGame.criterias.map(criteria => {
            return <li value={criteria.id} key={criteria.id} onClick={handleEvent}>{criteria.title}</li>
          })}
        </ul>
      </>
    )
  } 
  
  return null
}

export default CriteriaList;
