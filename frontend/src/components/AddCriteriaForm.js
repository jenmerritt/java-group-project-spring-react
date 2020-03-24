import React, { Component } from 'react';
import './styles/AddCriteriaForm.css';

class AddCriteriaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      criteria: ""
    };
    this.handleCriteriaChange = this.handleCriteriaChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleCriteriaFormClass = this.toggleCriteriaFormClass.bind(this)
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
      criteria: "",
      criteriaFormState: false
    })
  }

handleCriteriaChange(event) {
    this.setState({ criteria: event.target.value })
  }

  toggleCriteriaFormClass(){
    const currentState = this.state.criteriaFormState;
    this.setState({criteriaFormState: !currentState})
  }

  render() {
    return (
      <>
        <button className="add-criteria-button" onClick={this.toggleCriteriaFormClass}>Add Criteria</button>
        <form className={this.state.criteriaFormState ? null : "hidden"} onSubmit={this.handleSubmit}>
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
