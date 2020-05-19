import React, {useState} from 'react';

function LeaderboardPlayersForm(props) {

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
      name: nameToSubmit
    })

    setName("")
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input value={name} onChange={handleNameChange} />
          <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default LeaderboardPlayersForm;