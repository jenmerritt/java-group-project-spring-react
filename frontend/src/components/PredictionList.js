import React, {useState, useEffect} from 'react';
import './styles/PredictionList.css';

function PredictionList(criteriaId) {

  const [selectedPredictions, setSelectedPredictions] = useState([]);

  useEffect(() => {

    if(criteriaId != null){
      const url = `http://localhost:8080/criterias/${criteriaId.criteriaId}/predictions`

      fetch(url)
      .then(res => res.json())
      .then(fetchedPredictions => setSelectedPredictions(fetchedPredictions._embedded.predictions))
      .catch(err => console.error);
    }
  });

      return (
        <>
          <section className="prediction-list">
            {selectedPredictions.map(prediction => {
              return <article className="prediction-item" value={prediction.id} key={prediction.id} ><p>{prediction.friend.name} predicts {prediction.predictionTitle}</p></article>
            })}
          </section>
        </>
      )
  }


export default PredictionList;
