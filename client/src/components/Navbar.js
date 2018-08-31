import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {

    const link = {
      width: '100px',
      padding: '4px',
      margin: '0 6px 6px',
      background: 'pink',
      textDecoration: 'none',
      color: 'white',
    }

    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue',
            color: 'white'
        }}>
          Home
        </NavLink>
        <NavLink
          to="/tips"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue',
            color: 'white'
        }}>
          Workout Tips
        </NavLink>
        <NavLink
          to="/workouts"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue',
            color: 'white'
        }}>
          Workouts
        </NavLink>
      </div>
    )
  

}

export default Navbar;
