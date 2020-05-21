import React, {Component} from 'react';
import ManagePlayerPoints from './ManagePlayerPoints';
import './styles/leaderboards.css';
import '../../App.css';
import NotFound from '../NotFound';

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
        .then(leaderboard => {
            leaderboard._embedded.players = leaderboard._embedded.players.sort((a,b) => b.points - a.points)
            this.setState({leaderboard: leaderboard})
        })
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
            <section className="section-wrap">
                <h1>{this.state.leaderboard.title}</h1>
                { this.state.leaderboard._embedded ? 
                    <>
                        <a href={`/leaderboards/${this.state.leaderboard.id}/add-player`}><button className="standard-button">Add Player</button></a>
                        <section className="players-list">
                        {this.state.leaderboard._embedded.players.map((player, index) => {
                            return(
                            <article className="player-box" key={player.id}>
                                <div className="player-position">
                                    { index === 0 ? 
                                    <p>&#127942;</p>
                                    :
                                    <p>{index + 1}</p>}
                                </div>
                                <div className="player-name">
                                    <p>{player.name}</p>
                                </div>
                                <div className="player-points">
                                    <p>{player.points}</p>
                                </div>
                                <div>
                                    <hr className="points-divider"/>
                                </div>
                                <ManagePlayerPoints player={player} leaderboard={this.state.leaderboard} updatePlayerPoints={this.updatePlayerPoints} />
                            </article>
                            )
                        })}
                        </section> 
                    </>
                    : <NotFound />
                }
            </section>
        );
    }
}

export default LeaderboardDetail;