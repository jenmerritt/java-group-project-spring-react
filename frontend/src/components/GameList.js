import React, { Component } from 'react';
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
        <section id="game-list-wrapper">
          <article id="game-list-left">
            <h1 className="main-heading">Your Games</h1>
          </article>
          <article id="game-list-right">
            <ul className="game-list">
              {this.props.games.map(game => {
                return <li value={game.id} key={game.id} onClick={this.handleSelectGame}>{game.title}</li>
              })}
            </ul>
          </article>  
        </section>
        <hr/>
        <CriteriaList onGameDelete={this.props.onGameDelete} selectedGame={this.state.selectedGame} onCriteriaClick={this.handleSelectCriteria} />
        <PredictionList selectedCriteria={this.state.selectedCriteria} />

        {this.state.selectedGame ? <AddCriteriaForm selectedGame={this.state.selectedGame}
          onCriteriaSubmit={this.handleCriteriaSubmit} /> : null}

      { this.state.selectedGame ? <AddFriendForm selectedGame={this.state.selectedGame}
      handleFriendSubmit={this.handleFriendSubmit} /> : null}

      { this.state.createdFriend ? <AddPredictionForm selectedGame={this.state.selectedGame}
      createdFriend={this.state.createdFriend} onPredictionSubmit={this.handlePredictionSubmit} /> : null }
      <DeleteGame selectedGame={this.state.selectedGame} onGameDelete={this.props.onGameDelete} />
      </>
    )


  }
}


export default GameList;
