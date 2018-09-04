import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = ({ workouts }) => {
  // console.log(workouts)
  if (workouts.length > 0) {
    let workoutLinks = workouts.map((workout) => {
      return <div>
          <Link
            key={workout.id}
            to={`/workouts/${workout.id}`}>
            {workout.name}
          </Link>
        </div>
    })

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
