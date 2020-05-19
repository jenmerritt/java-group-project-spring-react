import React, {Component} from 'react';
import LeaderboardList from '../components/LeaderboardList';

class Leaderboards extends Component {
    constructor(props){
        super(props);
        this.state = {
            leaderboards: []
        }
        this.fetchLeaderboards = this.fetchLeaderboards.bind(this);    
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


    render(){
            return (
            <>
                <LeaderboardList leaderboards={this.state.leaderboards} />
            </>
        );
    }
}

export default Leaderboards;