import React, { Component } from 'react';
// import Workout from '../components/Workout';
import { Row } from 'react-materialize';
import CreateWorkoutForm from './CreateWorkoutForm';
import { getWorkouts } from '../actions/workouts';
import { connect } from 'react-redux';
import WorkoutList from '../components/WorkoutList';
import WorkoutPage from './WorkoutPage';
import { Route, Switch } from 'react-router-dom';
import Patience from '../components/Patience';


class WorkoutsPage extends Component {

  componentDidMount() {
    this.props.getWorkouts()
  }

  render() {
      console.log(this.props)

      return (
        <div>
            <p>
              <WorkoutList workouts={this.props.workouts} />
              <Switch>
                <Route path={`${this.props.match.url}/new`} component={CreateWorkoutForm} />
                <Route path={`${this.props.match.url}/:workoutId`} component={WorkoutPage} />
              </Switch>
            </p>
        </div> )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {workouts: state.allWorkouts.workouts}
}

export default connect(mapStateToProps, { getWorkouts })(WorkoutsPage);


          // <WorkoutPage allworkouts={this.props.workouts} />
