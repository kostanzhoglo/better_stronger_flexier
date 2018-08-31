export default function workoutsReducer (state = {loading: false, workouts: []}, action) {

  switch (action.type) {
    case 'ADDING_WORKOUT':
      return {...state, loading: true}
    case 'CREATE_WORKOUT':
      return {...state, workouts: action.workouts}
    default:
      return state;
  }
}
