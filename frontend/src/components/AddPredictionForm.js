import React, { Component } from 'react'
import './styles/AddPredictionForm.css'


class AddPredictionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prediction: "",
          criteriaToUpdateId: null
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePredictionChange = this.handlePredictionChange.bind(this)
        this.updateCriteriaState = this.updateCriteriaState.bind(this)
    }

    handlePredictionChange(event) {
        this.setState({ prediction: event.target.value})
      }

    handleSubmit(event) {
        event.preventDefault();
        const prediction = this.state.prediction;
        const criteriaToUpdateId = this.state.criteriaToUpdateId;

        if (!prediction || !criteriaToUpdateId) {
          return
        }
        this.props.onPredictionSubmit({
          title: prediction
        }, {
          criteria: criteriaToUpdateId
        }

        )
        this.setState({
          prediction: "",
          criteriaToUpdateId: ""
        })
      }

      updateCriteriaState(criteriaId){
        this.setState({criteriaToUpdateId: criteriaId})
      }

    render(){

        return(
            <>
            <section>
                <h2>Now Add {this.props.createdFriend.name}'s Predictions for {this.props.selectedGame.title}</h2>
                { this.props.selectedGame.criterias.map(criteria => {
                  return <form onSubmit={this.handleSubmit}>
                      <label>
                      { criteria.title }
                      </label><br/>
                          <input className="form-text" onChange={this.handlePredictionChange}></input>
                          <input className="hide-input"></input>
                      <input type="submit" value="Submit Prediction" onClick={() => this.updateCriteriaState(criteria.id)} />
                  </form>
                }
              )}
              </section>
              </>
            )
}
}

    export default AddPredictionForm
