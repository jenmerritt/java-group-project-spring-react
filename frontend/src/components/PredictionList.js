import React, {Component} from 'react';
import './styles/PredictionList.css';

class PredictionList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPredictions: []
    }
  }

  componentDidMount(){

    if(this.props.criteria != null){
      const url = `http://localhost:8080/criterias/${this.props.criteria.id}`

      fetch(url)
      .then(res => res.json())
      .then(criteria => this.setState({ selectedPredictions: criteria._embedded.predictions }))
      .catch(err => console.error);
    }
  }

  render(){
      return (
        <>
          <ul className="prediction-list">
            {this.state.selectedPredictions.map(prediction => {
              return <p className="list-of-predictions" value={prediction.id} key={prediction.id} >{prediction.predictionTitle}</p>
            })}
          </ul>
        </>
      )
  }
}


export default PredictionList;
