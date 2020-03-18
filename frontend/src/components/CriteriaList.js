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
        <section className="criteria-list">
          {selectedGame.criterias.map(criteria => {
            return(
                  <article className="individual-criteria">
                    <h3>{criteria.title}</h3>
                  </article>
          )})}
        </section>
      </>
    )
  } 

    return null
}

export default CriteriaList;
