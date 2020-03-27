import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      savedStatus: false
    };
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ savedStatus: true })
    const title = this.state.title;

    if (!title) {
      return
    }
    this.props.onGameSubmit({
      title: title
    })
    this.setState({
      title: ""
    })
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  render() {
      return (
        <>
          <section className={this.state.savedStatus ? 'hidden' : null}>
            <form onSubmit={this.handleSubmit}>
              <div className="input-wrap">
                <h1>Game Title:</h1>
                <input className="form-text" type="text" value={this.state.title} onChange={this.handleTitleChange} />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </section>
          <section className={this.state.savedStatus ? null : 'hidden'}>
              <p>Saved!</p>
              <Link to="/">Go to Dashboard</Link>
          </section>
        </>
      )
    }
}


export default GameForm
