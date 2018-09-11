export default function workoutsReducer(state = {
  loading: false, workouts: []
}, action) {

  switch (action.type) {
    case 'ADDING_WORKOUT':
      return {...state, loading: true}
    case 'CREATE_WORKOUT':
      const workout = action.payload
      return {...state, workouts: [...state.workouts, workout]}
      // merge the past workouts before adding this workout

    case 'LOADING_WORKOUTS':
      return {...state, loading: true}
    case 'GET_WORKOUTS':
      return {loading: false, workouts: action.workouts}
    default:
      return state;
  }
}
