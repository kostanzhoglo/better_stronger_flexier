import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutLink = props => {
  debugger
  return (
    <div key={workout.id}>
      <Link
        to={`/workouts/${workout.id}`}
      >
        {workout.name}
      </Link>
    </div>
  )
}

export default WorkoutLink;
