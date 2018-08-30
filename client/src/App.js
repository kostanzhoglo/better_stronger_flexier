import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import TipsPage from './containers/TipsPage';
import WorkoutsPage from './containers/WorkoutsPage';
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
            <Route path="/workouts" component={WorkoutsPage} />
          {/* </p> */}
        </div>
      </Router>
    );
  }
}

export default App;
