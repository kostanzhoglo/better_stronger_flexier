import React, { Component } from 'react';
import Tip from '../components/Tip';

class TipsPage extends Component {
  render() {

    const tipsList = [
      "You can't out-train a bad diet.",
      "Rest is crucial for improvements. Don't work the same muscle group two days in a row.",
      "It's not the number of reps that is important, it's time under stress.",
      "Going to failure is about failure of form. Once you're not doing the exercise with good form anymore, STOP.",
      "You should be aiming to have 30-45 seconds of time under stress.",
      "Listen to your body. If you're tired, having a day of stretching is Important!"
    ]

    const tips = tipsList.map((tip) => (
      <Tip content={tip} />
    ))

    return (
      <ul>
        {tips}
      </ul>
    )
  }

}

export default TipsPage;
