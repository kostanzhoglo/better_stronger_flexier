import React, { Component } from 'react';
import { connect } from 'react-redux';
import Workout from '../components/Workout';

class WorkoutPage extends Component {
  render() {
    console.log("hello out there")

    return (
      <div>
        Hello!
        <Workout workout={this.props.workout} />
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const thisWorkout = state.allWorkouts.workouts.find(workout => workout.id === ownProps.match.url.id)

  if (thisWorkout) {
    return { thisWorkout }
  } else {
    return { workout: {} }
  }
};

export default connect(mapStateToProps)(WorkoutPage);
