import React, { Component } from 'react';

class WorkoutsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [
        {
          name: 'chest',
          content: 'pushups 4sets x 12reps, \n neck stretch 1x'
        }
      ]
    }
  };

  render() {
      const workouts = this.state.workouts.map(workout => (
        <Workout name={workout.name} content={workout.content} />
      ))
    return (

      <div>
        <p>
          WORK IT OUT
        </p>
        {workouts}
      </div>
    )
  }

}

export default WorkoutsPage;
