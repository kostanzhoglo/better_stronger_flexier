import { combineReducers } from 'redux';
import workoutsReducer from './workoutsReducer';

export default combineReducers({
  allWorkouts: workoutsReducer
})

// above, I used to have 'allWorkouts' as 'workouts'. But that made me a bit confused when I had to write, state.workouts.workouts.
// The first workouts (in workouts.workouts) was the ENTIRE return value of the workoutsReducer.  The second workouts is a property (an array) of the first 'workouts'.
// I renanmed it allWorkouts so that if I create a 2nd reducer, so I don't end up with 2 'all' states.  allWorkouts and allTips as an example.  Onward and Upward!
