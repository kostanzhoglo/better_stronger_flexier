import React, { Component } from 'react';
import Workout from '../components/Workout';
import { Row } from 'react-materialize';

class WorkoutsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [
        {
          name: 'chest',
          content: 'pushups 4sets x 12reps, neck stretch 1x'
        },
        {
          name: 'cardio',
          content: 'jump rope 5 minutes, hamstring stretch'
        },
        {
          name: 'back',
          content: 'pullups 5sets, 6-6-4-3-2, 1-arm row 4sets x 8 reps, wrist strength 1set x 15'
        }
      ]
    }
  };

  render() {
      const workouts = this.state.workouts.map(workout => (
        <Workout title={workout.name} content={workout.content} />
      ))
    return (

      <div>
        <p>
          Workouts
        </p>
        {workouts}
      </div>
    )
  }

}

export default WorkoutsPage;