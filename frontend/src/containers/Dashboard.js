import React, {Component} from 'react';
import LandingPage from '../components/LandingPage';
import LeaderboardDetail from '../components/leaderboards/LeaderboardDetail';
import LeaderboardList from '../components/leaderboards/LeaderboardList';
import AddLeaderboard from '../components/leaderboards/AddLeaderboard';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LeaderboardAddPlayersForm from '../components/leaderboards/LeaderboardAddPlayersForm';
import NotFound from '../components/NotFound';
import NavBar from '../components/NavBar';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            leaderboards: []
        }
        this.fetchLeaderboards = this.fetchLeaderboards.bind(this);  
        this.handleLeaderboardSubmit = this.handleLeaderboardSubmit.bind(this);
        this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);  
    }
    
    componentDidMount(){
        this.fetchLeaderboards();
    }

    fetchLeaderboards(){
        const url = 'http://localhost:8080/leaderboards'

        fetch(url)
        .then(res => res.json())
        .then(leaderboards => this.setState({ leaderboards: leaderboards._embedded.leaderboards }))
        .catch(err => console.error);
    }

    handleLeaderboardSubmit(submittedLeaderboard){
        fetch('http://localhost:8080/leaderboards', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: submittedLeaderboard.title
            })
            })
            .then(res => res.json())
            .then(leaderboard =>{
                const updatedLeaderboards = [...this.state.leaderboards, leaderboard];
                this.setState({
                    leaderboards: updatedLeaderboards
                });
                return leaderboard;
                }
            ).then((leaderboard) => window.location.href=`/leaderboards/${leaderboard.id}/add-player`)
    }

    handlePlayerSubmit(submittedPlayer){
        fetch('http://localhost:8080/players', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: submittedPlayer.name,
                leaderboard: submittedPlayer.leaderboard
            })
            }).then(response => {
                if(response.ok){
                    alert(submittedPlayer.name + " saved! Go ahead and add another player!")
                } else {
                    alert("Sorry something went wrong, please try again.")
                    throw new Error('Something went wrong')   
            }}).catch(error => {
                console.log(error)
            })
    }

    render(){
            return (
                <>
                    <Router>
                        <Switch>
                            <Route
                                exact
                                path="/leaderboards"
                                render={() => <><NavBar /> <LeaderboardList leaderboards={this.state.leaderboards} /></>}
                            />
                            <Route
                                exact
                                strict
                                path="/new-leaderboard"
                                render={() => <><NavBar /> <AddLeaderboard onLeaderboardSubmit={this.handleLeaderboardSubmit} /></>}
                            />
                            <Route
                                exact
                                path="/leaderboards/:id"
                                render={(props)=> <><NavBar /><LeaderboardDetail id={props.match.params.id}/> </>} 
                            />
                            <Route
                                exact
                                path="/leaderboards/:id/add-player"
                                render={(props)=> <LeaderboardAddPlayersForm id={props.match.params.id} onPlayerSubmit={this.handlePlayerSubmit}/>} 
                            />
                            <Route
                                exact
                                path="/"
                                render={() => <LandingPage />}
                            />
                            <Route
                                render={() => <><NavBar /><NotFound /></>}
                            />
                        </Switch>
                    </Router>
            </>
        );
    }
}

export default Dashboard;