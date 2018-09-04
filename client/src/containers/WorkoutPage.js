import React, { Component } from 'react';
import { connect } from 'react-redux';
import Workout from '../components/Workout';

class WorkoutPage extends Component {
  render() {

    return (
      <div>
        <Workout workout={this.props.workout} />
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  const thisWorkout = state.allWorkouts.workouts.find(workout => workout.id === ownProps.match.url.id)

  if (thisWorkout) {
    return { thisWorkout }
  } else {
    return { workout: {} }
  }
};

export default connect(mapStateToProps)(WorkoutPage);
