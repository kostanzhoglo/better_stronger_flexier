import React from 'react';
import { Card, Col, Row } from 'react-materialize';
import '../App.css';

const Workout = props => {
  // console.log(props)

  return (
    <div>
      <h2>{props.name}</h2>
      <p className="workoutDisplay">{props.content}</p>
    </div>
  )
}

export default Workout;



{/* <Col m={3}>
  <Card title={props.name}>{props.content}</Card>
</Col> */}
