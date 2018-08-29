import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <h1 className="App-title">Welcome to Better, Stronger, Flexier!</h1>
            <Route exact path="/" component={Hello} />
            <Route exact path="/tips" component={TipsPage} />
            <Route exact path="/workouts" component={WorkoutsPage} />

          </header>
          <p className="App-intro">

          </p>
        </div>
    </Router>
    );
  }
}

export default App;
