import React from 'react';
import './styles/CriteriaList.css'

function CriteriaList({ selectedGame, onCriteriaClick }) {

  function handleEvent(event) {
    onCriteriaClick(event.target.value)
  }

  if (selectedGame != null) {
    return (
      <>
        <h3 className="title-text">{selectedGame.title}</h3>
        <ul className="criteria-list">
          {selectedGame.criterias.map(criteria => {
            return <li value={criteria.id} key={criteria.id} onClick={handleEvent}>{criteria.title}</li>
          })}
        </ul>
        
      </>
    )
  } return null
}

export default CriteriaList;
