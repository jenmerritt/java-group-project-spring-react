import React, { Component } from 'react'
import './styles/AddPredictionForm.css'
import AddFriendForm from './AddFriendForm';


class AddPredictionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prediction: "",
          criteriaToUpdateId: null,
          friendFormState: false,
          predictionsForGame: [],
          friendsListForGame: [],
          selectedFriend: null,
          predictionFormState: false
        };
        this.handleSubmitPrediction = this.handleSubmitPrediction.bind(this)
        this.handlePredictionChange = this.handlePredictionChange.bind(this)
        this.updateCriteriaState = this.updateCriteriaState.bind(this)
        this.toggleFriendFormClass = this.toggleFriendFormClass.bind(this)
        this.fetchPredictions = this.fetchPredictions.bind(this)
        this.setFriendsList = this.setFriendsList.bind(this)
        this.handleSelectFriend = this.handleSelectFriend.bind(this)
        this.togglePredictionFormClass = this.togglePredictionFormClass.bind(this)
    }

    fetchPredictions(){
      const friendsArray = [];
      const predictionsArray = [];
      this.props.selectedGame.criterias.map(criteria => {
        fetch(`http://localhost:8080/criterias/${criteria.id}/predictions`)
        .then(res => res.json())
        .then(predictionsFetched => 
          predictionsArray.push(predictionsFetched),
          this.setState({predictionsForGame: predictionsArray}))
        .then(() => this.setFriendsList())
        .catch(err => console.error)
      })
    }

    setFriendsList(){
      const predictionsArray = this.state.predictionsForGame
      let friendsArray = []
      let arrayToFilter = []
      predictionsArray.map(prediction => {
        let predictions = prediction._embedded.predictions
        predictions.map(actualPrediction => {
          let currentFriend = actualPrediction.friend
          arrayToFilter.push(currentFriend)
        })
      })
      friendsArray = arrayToFilter.filter((obj,pos,arr) => {
        return arr.map(mapObj => mapObj.id).indexOf(obj.id) === pos;  
      })
      this.setState({friendsListForGame: friendsArray})
    }

    handlePredictionChange(event) {
        this.setState({ prediction: event.target.value})
      }

    handleSubmitPrediction(event) {
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
        document.getElementById(criteriaId).classList.add('hidden');
        document.getElementById(criteriaId + "text").classList.remove('hidden');
      }

      toggleFriendFormClass(){
        const currentState = this.state.friendFormState;
        this.setState({friendFormState: !currentState})
      }

      togglePredictionFormClass(){
        const currentState = this.state.predictionFormState;
        this.setState({predictionFormState: !currentState})
      }

      handleSelectFriend(event) {
        const selectedFriend = this.state.friendsListForGame.find(friend => {
          return friend.id == event.target.value
        })
        fetch(`http://localhost:8080/friends/${selectedFriend.id}`)
        .then(res => res.json())
        .then(friendFetched => 
          this.setState({selectedFriend: friendFetched}))
        .catch(err => console.error)
      }

    render(){
      if(this.props.selectedGame != null){
      if(this.props.selectedGame.hasOwnProperty('criterias')){
        return(
            <>
              <button className="add-prediction-button" onClick={() => {this.toggleFriendFormClass(); this.fetchPredictions()}}>Add Predictions</button>
              <section className={this.state.friendFormState ? null : "hidden"}>
                  <AddFriendForm selectedGame={this.props.selectedGame} onFriendSubmit={this.props.onFriendSubmit} togglePredictionClass={this.togglePredictionFormClass} toggleFriendClass={this.toggleFriendFormClass} />
              </section>
              <section className={this.state.predictionFormState ? null : "hidden"}>
                  <p>What does {this.props.createdFriendName} predict?</p>
                  <article>
                  {this.props.selectedGame.criterias.map(criteria => {
                    return (
                        <form onSubmit={this.handleSubmitPrediction}>
                          <label>{ criteria.title } Prediction: 
                            <input className="form-text" onChange={this.handlePredictionChange}></input>
                          </label>
                        <input id={criteria.id} type="submit" value="Save" onClick={() => this.updateCriteriaState(criteria.id)} />
                        <p id={criteria.id + "text"} className="hidden">Saved!</p>
                        </form>
                    )}
                )}
                  </article> 
              <button className="add-prediction-button" onClick={this.togglePredictionFormClass}>close</button>
              </section> 
            </>
            )}}
      return(
        null
      )
  }
}

    export default AddPredictionForm
