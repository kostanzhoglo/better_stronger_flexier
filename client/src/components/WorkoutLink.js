import React, { Component } from 'react';

class WorkoutLink extends Component {

  constructor(props) {
    super(props)

    this.state = {
      workout: props.workout,
      likes: props.workout.likes
    }
  }

  handleOnClick = (e) => {
    // e.preventDefault();
    console.log(this.props.workout)

    const likedWorkout = Object.assign(...this.props.workout, {likes: this.props.workout.likes += 1})
    fetch(`http://localhost:3000/api/workouts/${this.props.workout.id}`,
      {method: 'PUT',
      // mode: 'no-cors',
      // credentials: 'same-origin',
        headers: {
          // 'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ workout: likedWorkout })
      })
      .then(response => response.json())
      .then(updatedWorkout => this.setState({ likes: updatedWorkout.likes }))
    console.log(this.props.workout)

    // this.setState({
    //   likes: this.state.likes + 1
    // })

    // 3 lines BELOW are an ALTERNATE way to write 3 lines ABOVE

    // this.setState(state => {
    //   return {likes: state.likes + 1}
    // })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Like</button>
        Likes: {this.state.likes}
      </div>
    )
  }
}

export default WorkoutLink;
