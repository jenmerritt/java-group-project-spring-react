import React, {useState, useEffect} from 'react';
import './styles/CriteriaList.css';
import PredictionList from './PredictionList.js';

function CriteriaList({ selectedGame }) {

  if (selectedGame != null && selectedGame.hasOwnProperty('_embedded')) {

    return (
      <>
        <h1 className="game-title">{selectedGame.title}</h1>
        <section className="criteria-list">
          {selectedGame._embedded.criterias.map(criteria => {
            return(
                  <section className="individual-criteria">
                    <article className="criteria-title">
                      <h3>{criteria.title}</h3>
                    </article>
                    <article className="prediction-list">
                      <PredictionList criteriaId={criteria.id} />
                    </article>
                  </section>
          )})}
        </section>
      </>
    )
  } 

    return null
}

export default CriteriaList;
