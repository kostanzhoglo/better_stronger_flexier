import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutLinks = ({ workouts }) => {

  if (workouts) {
    const workoutLinks = workouts.map((workout, index) => {
    return (
      <div>
          <div key={workout.id}>
            <Link
              to={`/workouts/${workout.id}`}
            >
              {workout.name}
            </Link>
          </div>
      </div>
    )})
  } else {
    return null;
  }
}

export default WorkoutLinks;


{/* <div key={props.workout.id}>
  <Link
    to={`/workouts/${props.workout.id}`}
  >
    {props.workout.name}
  </Link>
</div> */}
