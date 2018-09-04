import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import TipsPage from './containers/TipsPage';
import WorkoutsPage from './containers/WorkoutsPage';
import CreateWorkoutForm from './containers/CreateWorkoutForm';
import WorkoutPage from './containers/WorkoutPage'
import './bootstrap-reboot.css';

class App extends Component {
  render() {
    return (
      <Router>
        {/* <div> */}
        <div className="App">
          <Navbar />
          <header className="App-header">
            <h1 className="App-title">
              Better, Stronger, Flexier!
            </h1>
          </header>
          {/* <p className="App-intro"> */}
            <Route exact path="/" component={Hello} />
            <Route exact path="/tips" component={TipsPage} />
            <Route exact path="/workouts/new" component={CreateWorkoutForm} />
            <Route exact path="/workouts" component={WorkoutsPage} />
            <Route exact path="workouts/:id" component={WorkoutPage} />
          {/* </p> */}
        </div>
      </Router>
    );
  }
}

export default App;
