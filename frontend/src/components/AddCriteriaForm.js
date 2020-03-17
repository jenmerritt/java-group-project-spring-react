import React, { Component } from 'react'

class AddCriteriaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      criteria: ""
    };
    this.handleCriteriaChange = this.handleCriteriaChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();

    const criteriaTitle = this.state.criteria;

    if (!criteriaTitle) {
      return
    }
    this.props.onCriteriaSubmit({
      title: criteriaTitle
    })
    this.setState({
      criteria: ""
    })
  }

handleCriteriaChange(event) {
    this.setState({ criteria: event.target.value })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1 className="title-text">Add criteria to {this.props.selectedGame.title}</h1>
          <input className="form-text" value={this.state.criteria} onChange={this.handleCriteriaChange} />
          <div>
            <input className="form-submit" type="submit" value="Submit" />
          </div>
        </form>
      </>
    )
  }


}

export default AddCriteriaForm