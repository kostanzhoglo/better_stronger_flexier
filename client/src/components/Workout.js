import React from 'react';
import { Card, Col, Row } from 'react-materialize';


const Workout = props => {
  return (
    <div>
        <Col s={2}><h4>{props.title}</h4></Col>
        {/* <Col s={2}>{props.content}</Col> */}
    </div>
  )
}

export default Workout;
