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
                { this.state.leaderboard._embedded ? 
                    <>
                      {this.state.leaderboard._embedded.players.map(player => {
                        return(
                          <p key={player.id}>{player.name} : {player.points}</p>
                        )
                     })}
                    </> 
                    : null
                }
            </>
        );
    }
}

export default LeaderboardDetail;