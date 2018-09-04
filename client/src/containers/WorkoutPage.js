import React, { Component } from 'react';
import { connect } from 'react-redux';
import Workout from '../components/Workout';

class WorkoutPage extends Component {
  render() {

    return (
      <div>
        <Workout />
      </div>

    )
  }
}

export default WorkoutPage;
