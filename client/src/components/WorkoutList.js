import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import WorkoutLike from './WorkoutLike';
import WorkoutPage from '../containers/WorkoutPage';


class WorkoutList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortedButtonClicked: false
    }
  }

  handleSortClick = (e) => {
    this.setState({
      sortedButtonClicked: true
    })
  }

  // it's going to mutate the props.  slice() will return a new array, so I'm NOT mutating my props. see line 27. set it to a new variable, so THAT variable is the thing being mutated, not my actual props.

  // console.log(workouts.workouts)
  render() {
    if (this.props.workouts.workouts.length > 0) {
      let workoutDisplays = this.props.workouts.workouts.slice()
      // let sortedWorkouts = this.props.workouts.workouts.sort((a, b) => b.likes - a.likes)
      let workoutLinks = this.state.sortedButtonClicked ?
      workoutDisplays.sort((a, b) => b.likes - a.likes).map(workout => {
        return (
          <div>
            <div key={workout.id}>
              <Link
                to={`/workouts/${workout.id}`}>
                {workout.name}
              </Link>
              <WorkoutLike workout={workout} />
            </div>
            <p></p>
            {/* <Route path={`/workouts/:workoutId`} component={WorkoutPage} /> */}
          </div>
      )}) :
      workoutDisplays.map((workout) => {
        return (
          <div>
            <div key={workout.id}>
              <Link
                to={`/workouts/${workout.id}`}>
                {workout.name}
              </Link>
              <WorkoutLike workout={workout} />
            </div>
            <p></p>
            {/* <Route path={`/workouts/:workoutId`} component={WorkoutPage} /> */}
          </div>
      )})
      // debugger
      return (
        <div>
          <h2>Previous Workouts:
            <span>
              <button onClick={this.handleSortClick}>Sort</button>
            </span>
          </h2>
          {workoutLinks}
        </div>
      )

    } else {
      return (
        <div>
          <p>
            I would refresh the page if I were you!
          </p>
          <p>
            Go ahead, live a little!
          </p>
        </div>

    )
    }
  }
}

export default WorkoutList;
