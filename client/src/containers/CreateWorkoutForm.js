import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWorkout } from '../actions/workouts';
import { Redirect } from 'react-router-dom';
import '../App.css';

class CreateWorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      content: '',
      completions: '',
      toWorkouts: false,
      likes: ''
    }
  }

  handleChange = e => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addWorkout({...this.state, completions: 0, likes: 0});
    this.setState({
      // name: '',
      // content: '',
      // completions: '',
      toWorkouts: true
      // react router histopry function
      // contrast calculator
    })
  }

  render() {
    if (this.state.toWorkouts === true) {
      return (
        <div>
          <Redirect to='/workouts' />
        </div>
      )
    }

    return (
      <div>
        <h2>Create a New Workout</h2>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>Workout Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <label>Exercises / Stretches:</label>
              <textarea
                rows="20"
                cols="40"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
              >
              </textarea>
            </p>
            <p>
              <button type="submit">Add Workout</button>
            </p>
          </form>

      </div>
    )
  }
}

export default connect(null, { addWorkout })(CreateWorkoutForm)
