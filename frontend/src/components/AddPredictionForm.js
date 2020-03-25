import React, { Component } from 'react'
import './styles/AddPredictionForm.css'


class AddPredictionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prediction: "",
          criteriaToUpdateId: null,
          predictionFormState: false,
          predictionsForGame: []
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePredictionChange = this.handlePredictionChange.bind(this)
        this.updateCriteriaState = this.updateCriteriaState.bind(this)
        this.togglePredictionFormClass = this.togglePredictionFormClass.bind(this)
        this.fetchPredictions = this.fetchPredictions.bind(this)
    }

    fetchPredictions(){
      const friendsArray = [];
      const predictionsArray = [];
      this.props.selectedGame.criterias.map(criteria => {
        fetch(`http://localhost:8080/criterias/${criteria.id}/predictions`)
        .then(res => res.json())
        .then(predictionsFetched => predictionsArray.push(predictionsFetched))
        .catch(err => console.error)
      })
      
      this.setState({predictionsForGame: predictionsArray})
    }

    handlePredictionChange(event) {
        this.setState({ prediction: event.target.value})
      }

    handleSubmit(event) {
        event.preventDefault();
        const prediction = this.state.prediction;
        const criteriaToUpdateId = this.state.criteriaToUpdateId;

        if (!prediction || !criteriaToUpdateId) {
          return
        }
        this.props.onPredictionSubmit({
          title: prediction
        }, {
          criteria: criteriaToUpdateId
        }

        )
        this.setState({
          prediction: "",
          criteriaToUpdateId: ""
        })
      }

      updateCriteriaState(criteriaId){
        this.setState({criteriaToUpdateId: criteriaId})
      }

      togglePredictionFormClass(){
        const currentState = this.state.predictionFormState;
        this.setState({predictionFormState: !currentState})
      }

    render(){

        return(

            <>
              <button className="add-prediction-button" onClick={this.togglePredictionFormClass, this.fetchPredictions}>Manage Predictions</button>
              <section className={this.state.predictionFormState ? null : "hidden"}>
                <p>Prediction Form goes here</p>
              </section>
            </>

            )
}
}

    export default AddPredictionForm
