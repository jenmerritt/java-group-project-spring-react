import React, { Component } from 'react'

class AddFriend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleSubmit(event) {
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add a Friend!</h3>
        <input className="form-text" value={this.state.name} onChange={this.handleNameChange} />
        <div>
          <input className="form-submit" type="submit" value="Save Friend" />
        </div>
      </form>
    )
  }
}

export default AddFriend
