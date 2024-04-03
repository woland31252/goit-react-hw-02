
import { useState } from 'react';
import Description from '../Description/Description';
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
  
  // const feedbackUpdate = feedbackType => {
  //   const name = obj.feedbackType
  //   setObj({
  //   ...obj,
  //   name: obj.name + 1,
  // });
  // }


const handleOnClickGood = () => {
  setObj({
    ...obj,
    good: obj.good + 1,
  });
}
  
const handleOnClickNeutral = () => {
  setObj({
    ...obj,
    neutral: obj.neutral + 1,
  });
}

const handleOnClickBad = () => {
  setObj({
    ...obj,
    bad: obj.bad + 1,
  });
}


    return (
    <div className={css.container}>
      <Description />
      <Options clickGood={handleOnClickGood} clickNuetral={handleOnClickNeutral} clickBad={handleOnClickBad}/>
      <Feedback good={obj.good} neutral={obj.neutral} bad={ obj.bad} />
    </div>
  )
}

export default App
