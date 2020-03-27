import React, { Component } from 'react'
import GameList from '../components/GameList.js'
import NavBar from '../components/NavBar'
import {BrowserRouter as Router, Route } from "react-router-dom"
import GameForm from '../components/GameForm.js'
import './Dashboard.css'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      games:  [],
      selectedGame: null
    }
    this.handleGameSubmit = this.handleGameSubmit.bind(this);
    this.handleDeleteGame = this.handleDeleteGame.bind(this);
    this.resetSelectedGame = this.resetSelectedGame.bind(this);
    this.setSelectedGame = this.setSelectedGame.bind(this)
  }

  handleDeleteGame(deletedGameId) {
  const url=`http://localhost:8080/games/${deletedGameId}`
  fetch(url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        })
      }).then(() => {
            const newGameArray = this.state.games.filter(game => game.id !== deletedGameId)
            this.setState({
              games: newGameArray,
              selectedGame: null
            })
           })
     }

  resetSelectedGame(){
    this.setState({selectedGame: null})
  }

  setSelectedGame(game){
    this.setState({selectedGame: game})
  }


  componentDidMount(){
      const url = 'http://localhost:8080/games'

      fetch(url)
      .then(res => res.json())
      .then(games => this.setState({ games: games._embedded.games }))
      .catch(err => console.error);

  }

  componentWillUnmount(){
    this.resetSelectedGame();
  }

  handleGameSubmit(submittedGame) {
    fetch('http://localhost:8080/games', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: submittedGame.title,
        criterias: []
      })
    })
    .then(res => res.json())
    .then(game =>{
          const updatedGames = [...this.state.games, game];
          this.setState({
            games: updatedGames
          })
        }
        )
  }

  render() {
    return(
        <Router>
          <React.Fragment>
          <NavBar resetSelectedGame={this.resetSelectedGame}/>
          <section id="dashboard">
              <Route
              path="/add-game"
              render={() => <GameForm onGameSubmit={this.handleGameSubmit}
              createdGame={this.state.createdGame} createdFriend={this.state.createdFriend} onFriendSubmit={this.handleFriendSubmit} />}
              />
              <Route
              exact
              path="/"
              render={() => <GameList games={this.state.games} selectedGame={this.state.selectedGame} onGameSelect={this.handleSelectedGame} onGameDelete={this.handleDeleteGame}
              onCriteriaSubmit={this.handleCriteriaSubmit} resetSelectedGame={this.resetSelectedGame} setSelectedGame={this.setSelectedGame} />}
              />
          </section>
          </React.Fragment>
        </Router>
    )
  };
}
;
export default Dashboard;
