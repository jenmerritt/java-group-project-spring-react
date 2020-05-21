import React, {Component} from 'react';
import ManagePlayerPoints from './ManagePlayerPoints';
import DeleteLeaderboard from './DeleteLeaderboard';
import DeletePlayer from './DeletePlayer';
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
        this.handleDeletePlayer = this.handleDeletePlayer.bind(this);
    }
    
    componentDidMount(){
        this.fetchLeaderboard();
    }

    fetchLeaderboard(){
        fetch(`http://localhost:8080/leaderboards/${this.props.id}`)
        .then(res => res.json())
        .then(fetchedLeaderboard => {
            if(fetchedLeaderboard._embedded){
                fetchedLeaderboard._embedded.players = fetchedLeaderboard._embedded.players.sort((a,b) => b.points - a.points)
            }
            this.setState({leaderboard: fetchedLeaderboard})
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

    handleDeletePlayer(playerId){

        fetch(`http://localhost:8080/players/${playerId}`, {
            method: 'DELETE',
        })
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
                        <section className="players-list">
                        {this.state.leaderboard._embedded.players.map((player, index) => {
                            return(
                            <article className="player-box" key={player.id}>
                                <div className="player-position">
                                    { index === 0 ? 
                                    <p><span>&#127942;</span></p>
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
                                    <hr className="points-divider"/>
                                <DeletePlayer playerId={player.id} handleDeletePlayer={this.handleDeletePlayer} />
                            </article>
                            )
                        })}
                        </section> 
                    </>
                    : null
                }
                { this.state.leaderboard.id == this.props.id ? 
                    <div className="button-wrap">
                        <a href={`/leaderboards/${this.state.leaderboard.id}/add-player`}><button className="standard-button mr">Add Player</button></a>
                        <DeleteLeaderboard leaderboardId={this.state.leaderboard.id} />
                    </div>
                    :
                    <NotFound />
                }
            </section>
        );
    }
}

export default LeaderboardDetail;