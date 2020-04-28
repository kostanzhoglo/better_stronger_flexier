import React, { Component } from 'react';
import { connect } from 'react-redux';
import Workout from '../components/Workout';

class WorkoutPage extends Component {
  render() {
    console.log(this.props.thisWorkout)

    return (
      <div>
        <Workout name={this.props.thisWorkout.name} content={this.props.thisWorkout.content} />
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  const thisWorkout = state.allWorkouts.workouts.find(workout => workout.id == ownProps.match.params.workoutId)


  if (thisWorkout) {
    return { thisWorkout }
  } else {
    return { workout: {} }
  }
};

export default connect(mapStateToProps)(WorkoutPage);
