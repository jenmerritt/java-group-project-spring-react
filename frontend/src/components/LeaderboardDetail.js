import React, {Component} from 'react';

class LeaderboardDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            leaderboard: {}
        }
        this.fetchLeaderboard = this.fetchLeaderboard.bind(this);    
    }
    
    componentDidMount(){
        this.fetchLeaderboard();
    }

    fetchLeaderboard(){
        fetch(`http://localhost:8080/leaderboards/${this.props.id}`)
        .then(res => res.json())
        .then(leaderboard => this.setState({leaderboard: leaderboard}))
        .catch(err => console.error);
    }


    render(){
            return (
            <>
                <p>{this.state.leaderboard.title}</p>
            </>
        );
    }
}

export default LeaderboardDetail;