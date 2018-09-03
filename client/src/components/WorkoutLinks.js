import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutLinks = (props) => {
  console.log(props)
  if (props.workouts.length > 0) {
    let workoutLinks = props.workouts.map((workout) => {
      return <div key={workout.id}><Link                  to={`/workouts/${workout.id}`}>{workout.name}</Link></div>
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

export default WorkoutLinks;
