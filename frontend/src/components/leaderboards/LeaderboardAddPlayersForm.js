import React, {useState} from 'react';
import './styles/forms.css';
import './styles/leaderboards.css';
import '../../App.css';

function LeaderboardAddPlayersForm(props) {

  const [name, setName] = useState("")

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    const nameToSubmit = name;

    if (!nameToSubmit) {
      return
    }

    props.onPlayerSubmit({
      name: nameToSubmit,
      leaderboard: `http://localhost:8080/leaderboards/${props.id}`
    })

    setName("")
    
  }

  return (
    <section className="section-wrap">
            <h1>Add a Player</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={handleNameChange} />
              <input className="submit-button" type="submit" value="Submit" />
            </form>
            <hr className="full-width-spacer" />
            <div className="spacing-wrapper">
              <p>Finished adding players?</p>
              <a href={`/leaderboards/${props.id}/admin`}><button className="standard-button">Go to Leaderboard</button></a>
            </div>
    </section>
  );
}

export default LeaderboardAddPlayersForm;