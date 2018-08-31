import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWorkout } from '../actions/workouts';

class CreateWorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      content: '',
      completions: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Create a New Workout</h2>
          <form>
            <p>
              <label>Workout Name:</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label>Exercises / Stretches:</label>
              <textarea name="content" rows="20" cols="40"></textarea>
            </p>
            <p>
              <button type="submit">Add Workout</button>
            </p>
          </form>

      </div>
    )
  }
}
