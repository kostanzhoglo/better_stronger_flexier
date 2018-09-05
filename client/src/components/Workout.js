import React from 'react';
import { Card, Col, Row } from 'react-materialize';


const Workout = props => {
    // console.log(props.specific.workouts)
  // if (props.specific.workouts.length > 0) {
  //   return (
  //     <div>
  //       {props.specific.workouts[3].name}
  //     </div>
  //   )
  // } else {
  console.log(props)

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default Workout;


{/* <Col s={2}><h4>{props.title}</h4></Col>
<Col s={2}>{props.content}</Col> */}
