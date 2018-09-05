import React, { Component } from 'react';
// import Workout from '../components/Workout';
import { Row } from 'react-materialize';
import CreateWorkoutForm from './CreateWorkoutForm';
import { getWorkouts } from '../actions/workouts';
import { connect } from 'react-redux';
import WorkoutList from '../components/WorkoutList';
import WorkoutPage from './WorkoutPage';
import { Route, Switch } from 'react-router-dom';
// import Patience from '../components/Patience';
import Workout from '../components/Workout';



class WorkoutsPage extends Component {

  componentDidMount() {
    this.props.getWorkouts()
  }

  render() {
      // console.log(this.props)

      return (
        <div>
            <WorkoutList workouts={this.props} />
            <Switch>
              <Route exact path={`${this.props.match.url}/new`} component={CreateWorkoutForm} />
              <Route path={`${this.props.match.url}/:workoutId`} component={WorkoutPage} />
            </Switch>
        </div> )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {workouts: state.allWorkouts.workouts}
}

export default connect(mapStateToProps, { getWorkouts })(WorkoutsPage);
