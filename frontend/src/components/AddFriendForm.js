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

    this.props.toggleFriendClass();
    this.props.togglePredictionClass();
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  render(){
    return(
    <>
    <section>
    <form onSubmit={this.handleSubmit} className="">
        <h2>Who is making the predictions?</h2>
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
