import React, { Component } from 'react';
import CriteriaList from './CriteriaList'
import PredictionList from './PredictionList'
import './styles/GameList.css';
import AddCriteriaForm from './AddCriteriaForm';
import AddFriendForm from './AddFriendForm';
import DeleteGame from './DeleteGame';
import AddPredictionForm from './AddPredictionForm.js'


class GameList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGame: null,
      selectedCriteria: null,
      createdFriend: null
    }
    this.handleSelectGame = this.handleSelectGame.bind(this)
    this.handleSelectCriteria = this.handleSelectCriteria.bind(this)
    this.handleCriteriaSubmit = this.handleCriteriaSubmit.bind(this);
    this.handleFriendSubmit = this.handleFriendSubmit.bind(this);
    this.handlePredictionSubmit = this.handlePredictionSubmit.bind(this);
  }

  handleSelectGame(event) {
    this.setState({
      selectedCriteria: null
    })
    const selectedGame = this.props.games.find(game => {
      return game.id == event.target.value
    })
    this.props.onGameSelect(selectedGame)
    this.setState({
      selectedGame: selectedGame
    })


  }

  handleSelectCriteria(id) {
    const selectedCriteria = this.state.selectedGame.criterias.find(criteria => {
      return criteria.id === id
    })
    const correctId = selectedCriteria.id
    fetch(`http://localhost:8080/criterias/${correctId}`)
      .then(res => res.json())
      .then(fetchedCriteria => this.setState({ selectedCriteria: fetchedCriteria }))
      .catch(err => console.error);
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
      game: `http://localhost:8080/games/${this.state.selectedGame.id}`,
        result: ""
      })
    })
      .then(res => res.json())
      .then(criteria => {
        this.setState({
          selectedCriteria: criteria
        })
      });
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
    .then(friend => { this.setState({createdFriend: friend })})};

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
      .then(AddPredictionForm =>{
        console.log(submittedPrediction)
      })
    };



  render() {

    return (
      <>
        <h1 className="title-text">Games</h1>
        <ul className="Game-list">
          {this.props.games.map(game => {
            return <li value={game.id} key={game.id} onClick={this.handleSelectGame}>{game.title}</li>
          })}
        </ul>
        <a href="http://localhost:3000/add-game" className="form-submit">Add New Game</a>
        <DeleteGame selectedGame={this.state.selectedGame} onGameDelete={this.props.onGameDelete} />
        <CriteriaList selectedGame={this.state.selectedGame} onCriteriaClick={this.handleSelectCriteria} />
        <PredictionList selectedCriteria={this.state.selectedCriteria} />

        {this.state.selectedGame ? <AddCriteriaForm selectedGame={this.state.selectedGame}
          onCriteriaSubmit={this.handleCriteriaSubmit} /> : null}

      { this.state.selectedGame ? <AddFriendForm selectedGame={this.state.selectedGame}
      handleFriendSubmit={this.handleFriendSubmit} /> : null}

      { this.state.createdFriend ? <AddPredictionForm selectedGame={this.state.selectedGame}
      createdFriend={this.state.createdFriend} onPredictionSubmit={this.handlePredictionSubmit} /> : null }
      </>
    )


  }
}


export default GameList;
