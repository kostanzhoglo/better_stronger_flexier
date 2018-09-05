import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import TipsPage from './containers/TipsPage';
import WorkoutsPage from './containers/WorkoutsPage';

import CreateWorkoutForm from './containers/CreateWorkoutForm';
import './bootstrap-reboot.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1 className="App-title">
            Better, Stronger, Flexier!
          </h1>
        </header>
          <Route exact path="/" component={Hello} />
          <Route exact path="/tips" component={TipsPage} />
          <Route path="/workouts" component={WorkoutsPage} />
          {/* <Route path="/workouts/new" component={CreateWorkoutForm} /> */}
      </div>
    </Router>
  );
}

export default App;
