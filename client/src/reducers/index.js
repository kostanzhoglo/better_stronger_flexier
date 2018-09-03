import { combineReducers } from 'redux';
import workoutsReducer from './workoutsReducer';

export default combineReducers({
  allWorkouts: workoutsReducer
})

// above, I used to have 'all' as 'workouts'. But that made me a bit confused when I had to write, state.workouts.workouts.  The first workouts is the ENTIRE return value of the workoutsReducer.  The second workouts is a property (an array) of workouts.
// I could renanme it allWorkouts if I create a 2nd reducer, so I don't end up with 2 'all' states.  allWorkouts and allTips as an example.  Onward and Upward!
