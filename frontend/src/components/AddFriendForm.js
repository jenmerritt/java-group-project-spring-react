import React, { Component } from 'react'
import './styles/FriendForm.css'

class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
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

  render(){
    return(
    <form onSubmit={this.handleSubmit} className="">
      <section>
        <h1 className="title-text">Add a Friend and Predictions</h1>
        <h2>Friend Name</h2>
            <input className="form-text" value={this.state.name} onChange={this.handleNameChange} />
          <div>
            <input className="form-submit" type="submit" value="Save Friend" />
          </div>
        </section>
       
    </form>
    )
  }

}

export default AddFriendForm
