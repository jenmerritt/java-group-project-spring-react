import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CriteriaList from './CriteriaList'
import PredictionList from './PredictionList'
import './styles/GameList.css';
import AddCriteriaForm from './AddCriteriaForm';
import AddFriendForm from './AddFriendForm';
import AddPredictionForm from './AddPredictionForm.js'
import DeleteGame from './DeleteGame';

class GameList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdFriend: null,
      createdFriendName: null,
      displayPredictionForm: false,
      displayCriteriaForm: true
    }
    this.handleSelectGame = this.handleSelectGame.bind(this)
    this.handleCriteriaSubmit = this.handleCriteriaSubmit.bind(this);
    this.handleFriendSubmit = this.handleFriendSubmit.bind(this);
    this.handlePredictionSubmit = this.handlePredictionSubmit.bind(this);
    this.triggerPredictionForm = this.triggerPredictionForm.bind(this);
    this.resetGameSelectionForm = this.resetGameSelectionForm.bind(this);
  }

  handleSelectGame(event) {
    const selectedGame = this.props.games.find(game => {
      return game.id == event.target.value})
    fetch(`http://localhost:8080/games/${selectedGame.id}`)
    .then(res => res.json())
    .then(gameFetched => this.props.setSelectedGame(gameFetched))
    .catch(err => console.error)
    }

  resetGameSelectionForm(){
    document.getElementById("game-selector-form").reset();
  }

  handleCriteriaSubmit(submittedCriteria) {

    fetch('http://localhost:8080/criterias', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: submittedCriteria.title,
      game: `http://localhost:8080/games/${this.props.selectedGame.id}`,
        result: ""
      })
    })
      .then(res => res.json())
      .then(criteria => console.log(criteria))
  }

  handleFriendSubmit(submittedFriend) {
    fetch('http://localhost:8080/friends', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: submittedFriend.name
      })
    })
    .then(res => res.json())
    .then(friend => { 
        this.setState({
          createdFriend: friend,
          createdFriendName: friend.name
        })})};

    handlePredictionSubmit(submittedPrediction, criteriaPredicted){
      fetch('http://localhost:8080/predictions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          predictionTitle: submittedPrediction.title,
          friend: `http://localhost:8080/friends/${this.state.createdFriend.id}`,
          criteria: `http://localhost:8080/criterias/${criteriaPredicted.criteria}`
        })
      })
      .then(res => res.json())
    };

    triggerPredictionForm(){
      this.setState({
        displayPredictionForm: true,
        displayCriteriaForm: false
      })
    }



  render() {
    if(this.props.games.length === 0){
      return <Link to="/add-game"><p>Add Game</p></Link>
    }
      return (
        <>
          <section id="game-list-wrapper">
            <form id="game-selector-form">
              <select className="game-list" onChange={this.handleSelectGame} >
                <option disabled default selected>Select a Game</option>
                {this.props.games.map(game => {
                  return <option value={game.id} key={game.id} >{game.title}</option>
                })}
              </select>
            </form>
          </section>
          <hr/>
          <CriteriaList selectedGame={this.props.selectedGame} />
          

        {this.props.selectedGame && this.state.displayCriteriaForm ? <AddCriteriaForm selectedGame={this.props.selectedGame}
            onCriteriaSubmit={this.handleCriteriaSubmit} triggerPredictionForm={this.triggerPredictionForm} /> : null}

        { this.state.displayPredictionForm ? <AddPredictionForm selectedGame={this.props.selectedGame}
        createdFriendName={this.state.createdFriendName} onPredictionSubmit={this.handlePredictionSubmit}
        onFriendSubmit={this.handleFriendSubmit} /> : null }

        <DeleteGame selectedGame={this.props.selectedGame} onGameDelete={this.props.onGameDelete} resetGameSelectionForm={this.resetGameSelectionForm} />
        </>
      )
  }
}


export default GameList;
