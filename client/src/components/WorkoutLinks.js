import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutLinks = ({ workouts }) => {
  let workoutLinks = workouts.workouts.map((workout, index) => {
    return <div key={workout.id}><Link to={`/workouts/${workout.id}`}>{workout.name}</Link></div>
  })
  return (
    <div>
      <h2>Previous Workouts:</h2>
      {workoutLinks}
    </div>
  )
}


export default WorkoutLinks;
