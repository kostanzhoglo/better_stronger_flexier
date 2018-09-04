import React, { Component } from 'react';
import Workout from '../components/Workout';
import { Row } from 'react-materialize';
import CreateWorkoutForm from './CreateWorkoutForm';
import { getWorkouts } from '../actions/workouts';
import { connect } from 'react-redux';
import WorkoutLinks from '../components/WorkoutLinks';
import Patience from '../components/Patience';
import WorkoutPage from './WorkoutPage';


class WorkoutsPage extends Component {

  componentDidMount() {
    this.props.getWorkouts()
  }

  render() {
      console.log(this.props.workouts)
    return (
      <div>
          <p>
            <WorkoutLinks workouts={this.props.workouts} />

          </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {workouts: state.allWorkouts.workouts}
}

export default connect(mapStateToProps, { getWorkouts })(WorkoutsPage);


          // <WorkoutPage allworkouts={this.props.workouts} />
