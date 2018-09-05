import React from 'react';
import { Link, Route } from 'react-router-dom';
import Workout from './Workout';
import WorkoutPage from '../containers/WorkoutPage';

const WorkoutList = ({ workouts }) => {
  // console.log(workouts.workouts)

  if (workouts.workouts.length > 0) {
    let workoutLinks = workouts.workouts.map((workout) => {
      return (
        <div>
          <div key={workout.id}>
            <Link
              to={`/workouts/${workout.id}`}>
              {workout.name}
            </Link>
          </div>
          {/* <Route path={`/workouts/:workoutId`} component={WorkoutPage} /> */}

        </div>
    )})

    return (
      <div>
        <h2>Previous Workouts:</h2>
        {workoutLinks}
      </div>
    )

  } else {
    return (
    <div>
      Does anyone know what's happening?
    </div>
  )
  }

}

export default WorkoutList;
