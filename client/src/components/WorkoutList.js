import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import WorkoutLink from './WorkoutLink';
import WorkoutPage from '../containers/WorkoutPage';


class WorkoutList extends Component {
  // console.log(workouts.workouts)
  state = {
    likes: 0
  }

  handleOnClick = (e) => {
    e.preventDefault()
    this.setState(state => {
      return {likes: state.likes + 1}
    })
    // this.setState({
    //   likes: this.state.likes + 1
    // })
  }

  render() {

    if (this.props.workouts.workouts.length > 0) {
      let workoutLinks = this.props.workouts.workouts.map((workout) => {
        return (
          <div>
            <div key={workout.id}>
              <WorkoutLink workout={workout} />
              <Link
                to={`/workouts/${workout.id}`}>
                {workout.name}
              </Link>
              <button onClick={this.handleOnClick}>
                Like
              </button>
                  Likes: {this.state.likes}
            </div>
            {/* <Route path={`/workouts/:workoutId`} component={WorkoutPage} /> */}
          </div>
      )})

      return (
        <div>
          <h2>Previous Workouts:</h2>
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
