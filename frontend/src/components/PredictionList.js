import React from 'react';
import './styles/PredictionList.css';

function PredictionList({ criteria }) {

  if (criteria != null && criteria.hasOwnProperty('_embedded.predictions') && criteria._embedded.predictions != null) {
    return (
      <>
        <ul className="prediction-list">
          {criteria._embedded.predictions.map(prediction => {
            return <p className="list-of-predictions" value={prediction.id} key={prediction.id} >{prediction.title}</p>
          })}
        </ul>
      </>
    )
  } return null
}

export default PredictionList;
