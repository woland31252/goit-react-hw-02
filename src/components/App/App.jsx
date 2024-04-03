
import { useState } from 'react';
import Description from '../Description/Description';
import Notification from '../Notifications/Notification';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import css from './App.module.css'


function App() {
const [obj, setObj] = useState(
    {
    good: 0,
    neutral: 0,
    bad: 0
    });
  
  const feedbackUpdate = feedbackType => {
    setObj({
    ...obj,
    [feedbackType]: obj[feedbackType] + 1,
    });
  }
  const Reset = () => {
      setObj ({
        good: 0,
        neutral: 0,
        bad: 0
      })
    }
  const totalFeedback = obj.good + obj.neutral + obj.bad;
  const goodPercent = Math.round((obj.good / totalFeedback) * 100)


    return (
      <div className={css.container}>
        <Description />
        <Options click={feedbackUpdate} reset={Reset} total={totalFeedback}/>
        {totalFeedback>0?<Feedback value={obj} total={totalFeedback} round={goodPercent} />:<Notification/>}
      </div>
    )
}

export default App
