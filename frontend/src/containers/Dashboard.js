import React, {Component} from 'react';
import LandingPage from '../components/LandingPage';
import Leaderboards from './Leaderboards';
import LeaderboardDetail from '../components/LeaderboardDetail';
import {BrowserRouter as Router, Route } from "react-router-dom";

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
      }


    render(){
            return (
                <>
                    <Router>
                        <React.Fragment>
                            <Route
                                exact
                                path="/leaderboards"
                                render={() => <Leaderboards />}
                            />
                            <Route
                                exact
                                path="/leaderboards/:id"
                                render={(props)=> <LeaderboardDetail id={props.match.params.id}/>} 
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