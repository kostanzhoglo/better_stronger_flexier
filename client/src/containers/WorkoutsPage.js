import React, { Component } from 'react';
import Workout from '../components/Workout';
import { Row } from 'react-materialize';
import CreateWorkoutForm from './CreateWorkoutForm';
import { getWorkouts } from '../actions/workouts';
import { connect } from 'react-redux';
import WorkoutLink from '../components/WorkoutLink';


class WorkoutsPage extends Component {
  constructor(props) {
    super(props);

  //   this.state = {
  //     workouts: [
  //       {
  //         name: 'chest',
  //         content: 'pushups 4sets x 12reps, neck stretch 1x'
  //       },
  //       {
  //         name: 'cardio',
  //         content: 'jump rope 5 minutes, hamstring stretch'
  //       },
  //       {
  //         name: 'back',
  //         content: 'pullups 5sets, 6-6-4-3-2, 1-arm row 4sets x 8 reps, wrist strength 1set x 15'
  //       }
  //     ]
  //   }
  };

  componentDidMount() {
    this.props.getWorkouts()
  }

  render() {
      // const workouts = this.state.workouts.map(workout => (
      //   <Workout title={workout.name} content={workout.content} />
      // ))
      const workoutsDeux = this.props.workouts.map(realWorkout => (
        <WorkoutLink workout={realWorkout} />
      ))
    return (

      <div>
        <p>
          <CreateWorkoutForm />
        </p>
        {/* {workouts} */}
        <p>
          Previous Workouts:
        </p>


      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    workouts: state.workouts
  }
}

export default connect(mapStateToProps, { getWorkouts })(WorkoutsPage);
