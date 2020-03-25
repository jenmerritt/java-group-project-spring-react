import React, { Component } from 'react'
import './styles/AddPredictionForm.css'


class AddPredictionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prediction: "",
          criteriaToUpdateId: null,
          predictionFormState: false,
          predictionsForGame: [],
          friendsListForGame: []
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePredictionChange = this.handlePredictionChange.bind(this)
        this.updateCriteriaState = this.updateCriteriaState.bind(this)
        this.togglePredictionFormClass = this.togglePredictionFormClass.bind(this)
        this.fetchPredictions = this.fetchPredictions.bind(this)
        this.setFriendsList = this.setFriendsList.bind(this)
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

      handleSelectFriend(event) {
        console.log(event)
        // this.setState({
        //   selectedCriteria: null
        // })
        // const selectedGame = this.props.games.find(game => {
        //   return game.id == event.target.value
        // })
        // this.setState({
        //   selectedGame: selectedGame
        // })
      }

    render(){

        return(

            <>
              <button className="add-prediction-button" onClick={() => {this.togglePredictionFormClass(); this.fetchPredictions()}}>Manage Predictions</button>
              <section className={this.state.predictionFormState ? null : "hidden"}>
                <p>blah</p>
                  <article>
                    <select onChange={this.handleSelectFriend} >
                      <option disabled default selected>Select a Friend</option>
                      {this.state.friendsListForGame.map(friend => {
                        return <option value={friend.id} key={friend.id} >{friend.name}</option>
                      })}
                    </select>
                </article>
              </section>
            </>

            )
}
}

    export default AddPredictionForm
