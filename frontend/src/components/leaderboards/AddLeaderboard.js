import React, {useState} from 'react';
import './styles/leaderboards.css';
import './styles/forms.css';

function AddLeaderboard(props) {

  const [title, setTitle] = useState("")

  function handleTitleChange(event){
    setTitle(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    const titleToSubmit = title;

    if (!titleToSubmit) {
      return
    }

    props.onLeaderboardSubmit({
      title: titleToSubmit
    })

    setTitle("")
    
  }

  return (
    <section className="section-wrap">
      <h1>Add Leaderboard</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={handleTitleChange} />
          <input className="submit-button" type="submit" value="Submit" />
      </form>
    </section >
  );
}

export default AddLeaderboard;