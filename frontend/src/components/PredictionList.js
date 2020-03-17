import React from 'react';
import './PredictionList.css';

function PredictionList({ selectedCriteria }) {

  if (selectedCriteria != null && selectedCriteria._embedded.predictions != null) {
    return (
      <>
        <ul className="prediction-list">
          {selectedCriteria._embedded.predictions.map(prediction => {
            return <ul className="list-of-predictions" value={prediction.id} key={prediction.id} >{prediction.friend.name} predicts {prediction.predictionTitle}</ul>
          })}
        </ul>
      </>
    )
  } return null
}

export default PredictionList;
