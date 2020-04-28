import fetch from 'isomorphic-fetch';

export function addWorkout (workout) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ workout: workout })
  }
  return (dispatch) => {
    dispatch({ type: 'ADDING_WORKOUT' });
    return fetch(`http://localhost:3000/api/workouts`, request)
      .then(response => response.json())
      .then(workoutsResponse => {
          dispatch({ type: 'CREATE_WORKOUT', payload: workoutsResponse })});
  }
}

// export function getWorkouts() {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_WORKOUTS' });
//     return fetch('http://localhost:3000/api/workouts')
//       .then(response => response.json())
//       .then(workoutsResp => dispatch({ type: 'GET_WORKOUTS', workouts: workoutsResp.workouts }));
//   }
// }

export function getWorkouts() {
   return (dispatch) => {
      dispatch({ type: 'LOADING_WORKOUTS' });
      return fetch('http://localhost:3000/api/workouts')
         .then(response => response.json())
         .then(workoutsResp => {
            console.log(workoutsResp)
            dispatch({ type: 'GET_WORKOUTS', workouts: workoutsResp })
         });
   }
}
