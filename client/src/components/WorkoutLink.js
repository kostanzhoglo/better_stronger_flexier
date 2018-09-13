import React, { Component } from 'react';

class WorkoutLink extends Component {

  constructor(props) {
    super(props)

    this.state = {
      workout: props.workout,
      likes: 0
    }
  }

  handleOnClick = (e) => {
    e.preventDefault();
    this.setState({
      likes: this.state.likes + 1
    })
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
