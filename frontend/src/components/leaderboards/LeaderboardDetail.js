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
    }
    
    componentDidMount(){
        this.fetchLeaderboard();
    }

    fetchLeaderboard(){
        fetch(`https://how-many-points-api.herokuapp.com/leaderboards/${this.props.id}`)
        .then(res => res.json())
        .then(fetchedLeaderboard => {
            if(fetchedLeaderboard._embedded){
                fetchedLeaderboard._embedded.players = fetchedLeaderboard._embedded.players.sort((a,b) => b.points - a.points)
            }
            this.setState({leaderboard: fetchedLeaderboard})
        })
        .catch(err => console.error);
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
                            </article>
                            )
                        })}
                        </section> 
                    </>
                    : null
                }
                { this.state.leaderboard.id == this.props.id ? 
                    null
                    :
                    <NotFound />
                }
            </section>
        );
    }
}

export default LeaderboardDetail;