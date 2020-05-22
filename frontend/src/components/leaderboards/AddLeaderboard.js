import React, {useState} from 'react';
import './styles/leaderboards.css';
import './styles/forms.css';

function AddLeaderboard(props) {

  const [title, setTitle] = useState("")
  const [isHidden, setIsHidden] = useState(false)

  function handleTitleChange(event){
    setTitle(event.target.value)
  }

  function handleCheckboxChange(){
      setIsHidden(!isHidden)
  }

  function handleSubmit(event){
    event.preventDefault();

    const titleToSubmit = title;
    const isHiddenToSubmit = isHidden;

    const date = new Date();
    const seconds = date.getTime();
    const timeString = seconds.toString();

    props.onLeaderboardSubmit({
      title: titleToSubmit,
      adminUrl: timeString,
      isHidden: isHiddenToSubmit
    })

    setTitle("")
    setIsHidden(false)
    
  }

  return (
    <section className="section-wrap">
      <h1>Add Leaderboard</h1>
      <form onSubmit={handleSubmit}>
          <input required type="text" value={title} onChange={handleTitleChange} />
          <br/>
          <label for="is-hidden">Hide from the Leaderboards page.</label>
          <input name="is-hidden" type="checkbox" checked={isHidden} onChange={handleCheckboxChange} />
          <br/>
          <input className="submit-button" type="submit" value="Submit" />
      </form>
    </section >
  );
}

export default AddLeaderboard;