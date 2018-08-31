import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutLinks = props => {
  return (
    <div key={props.workout.id}>
      <Link
        to={`/workouts/${props.workout.id}`}
      >
        {props.workout.name}
      </Link>
    </div>
  )
}

export default WorkoutLinks;
