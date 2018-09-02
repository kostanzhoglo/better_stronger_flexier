import React, { Component } from 'react';
import Workout from '../components/Workout';
import { Row } from 'react-materialize';
import CreateWorkoutForm from './CreateWorkoutForm';
import { getWorkouts } from '../actions/workouts';
import { connect } from 'react-redux';
import WorkoutLinks from '../components/WorkoutLinks';
import Patience from '../components/Patience';


class WorkoutsPage extends Component {

  componentDidMount() {
    this.props.getWorkouts()
  }

  render() {
    return (
      <div>
          <p>
            <CreateWorkoutForm />
            <WorkoutLinks workouts={this.props.workouts} />
          </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {workouts: state.workouts}
}

export default connect(mapStateToProps, { getWorkouts })(WorkoutsPage);
