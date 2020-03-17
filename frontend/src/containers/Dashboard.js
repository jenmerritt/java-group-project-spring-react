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
      games:  []
    }
    this.handleGameSubmit = this.handleGameSubmit.bind(this);
    this.handleDeleteGame = this.handleDeleteGame.bind(this);
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
            this.setState({games: newGameArray})
           })
     }


  componentDidMount(){
      const url = 'http://localhost:8080/games'

      fetch(url)
      .then(res => res.json())
      .then(games => this.setState({ games: games._embedded.games }))
      .catch(err => console.error);

  }

  handleGameSubmit(submittedGame) {
    console.log(submittedGame);

    fetch('http://localhost:8080/games', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: submittedGame.title
      })
    })
    .then(res => res.json())
    .then(game =>{
          const updatedGames = [...this.state.games, game];
          this.setState({
            games: updatedGames
          });
        })
  }

  render() {
    return(
        <Router>
          <React.Fragment>
          <NavBar/>
          <section id="dashboard">
              <Route
              path="/add-game"
              render={() => <GameForm onGameSubmit={this.handleGameSubmit}
              createdGame={this.state.createdGame} createdFriend={this.state.createdFriend} onFriendSubmit={this.handleFriendSubmit} />}
              />
              <Route
              exact
              path="/"
              render={() => <GameList games={this.state.games} onGameSelect={this.handleSelectedGame} onGameDelete={this.handleDeleteGame}
              onCriteriaSubmit={this.handleCriteriaSubmit} />}
              />
          </section>
          </React.Fragment>
        </Router>
    )
  };
}
;
export default Dashboard;
