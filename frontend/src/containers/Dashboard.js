import React, {Component} from 'react';
import LandingPage from '../components/LandingPage';
import LeaderboardDetail from '../components/LeaderboardDetail';
import LeaderboardList from '../components/LeaderboardList';
import AddLeaderboard from '../components/AddLeaderboard';
import {BrowserRouter as Router, Route} from "react-router-dom";
import LeaderboardAddPlayersForm from '../components/LeaderboardAddPlayersForm';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            leaderboards: []
        }
        this.fetchLeaderboards = this.fetchLeaderboards.bind(this);  
        this.handleLeaderboardSubmit = this.handleLeaderboardSubmit.bind(this);  
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
            ).then((leaderboard) => window.location.href=`/leaderboards/${leaderboard.id}/add-players`)
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
            })
    }

    render(){
            return (
                <>
                    <Router>
                        <React.Fragment>
                            <Route
                                exact
                                path="/leaderboards"
                                render={() => <LeaderboardList leaderboards={this.state.leaderboards} />}
                            />
                            <Route
                                exact
                                path="/leaderboards/new"
                                render={() => <AddLeaderboard onLeaderboardSubmit={this.handleLeaderboardSubmit} />}
                            />
                            <Route
                                exact
                                path="/leaderboards/:id"
                                render={(props)=> <LeaderboardDetail id={props.match.params.id}/>} 
                            />
                            <Route
                                exact
                                path="/leaderboards/:id/add-players"
                                render={(props)=> <LeaderboardAddPlayersForm id={props.match.params.id} onPlayerSubmit={this.handlePlayerSubmit}/>} 
                            />
                            <Route
                                exact
                                path="/"
                                render={() => <LandingPage />}
                            />
                        </React.Fragment>
                    </Router>
            </>
        );
    }
}

export default Dashboard;