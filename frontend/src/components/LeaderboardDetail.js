import React, {Component} from 'react';
import ManagePlayerPoints from './ManagePlayerPoints';

class LeaderboardDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            leaderboard: {}
        }
        this.fetchLeaderboard = this.fetchLeaderboard.bind(this);    
        this.updatePlayerPoints = this.updatePlayerPoints.bind(this);
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

    updatePlayerPoints(pointsToUpdate, playerId){
        fetch(`http://localhost:8080/players/${playerId}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                points: pointsToUpdate
            })})
        .then(() => this.fetchLeaderboard())
        .catch(error => {
                console.log(error)
            })
    }


    render(){
            return (
            <>
                <h1>{this.state.leaderboard.title}</h1>
                { this.state.leaderboard._embedded ? 
                    <>
                      {this.state.leaderboard._embedded.players.map(player => {
                        return(
                        <>
                          <p key={player.id}>{player.name} : {player.points}</p>
                          <ManagePlayerPoints player={player} leaderboard={this.state.leaderboard} updatePlayerPoints={this.updatePlayerPoints} />
                        </>
                        )
                     })}
                    </> 
                    : null
                }
                <a href={`/leaderboards/${this.state.leaderboard.id}/add-player`}><button>Add Player</button></a>
            </>
        );
    }
}

export default LeaderboardDetail;