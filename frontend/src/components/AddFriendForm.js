import React, { Component } from 'react'
import './styles/FriendForm.css'

class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      friendFormState: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.toggleFriendFormClass = this.toggleFriendFormClass.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();

    const name = this.state.name;

    if (!name) {
      return
    }
    this.props.onFriendSubmit({
      name: name
    })
    this.setState({
      name: ""
    })
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  toggleFriendFormClass(){
    const currentState = this.state.friendFormState;
    this.setState({friendFormState: !currentState})
  }

  render(){
    return(
    <>
    <button className="add-friend-button" onClick={this.toggleFriendFormClass}>Add Friend</button>
    <section className={this.state.friendFormState ? null : "hidden"} >
    <form onSubmit={this.handleSubmit} className="">
        <h2>Friend Name</h2>
            <input className="form-text" value={this.state.name} onChange={this.handleNameChange} />
          <div>
            <input className="form-submit" type="submit" value="Save" />
          </div>
    </form>
    </section>
    </>
    )
  }

}

export default AddFriendForm
