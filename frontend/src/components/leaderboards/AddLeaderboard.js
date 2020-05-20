import React, {useState} from 'react';

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
    <>
      <h1>Add Leaderboard</h1>
      <form onSubmit={handleSubmit}>
          <input value={title} onChange={handleTitleChange} />
          <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddLeaderboard;