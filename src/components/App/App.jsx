
import { useState } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import './App.module.css'


function App() {
const [clicks, setClicks] = useState(
    {
    good: 0,
    neutral: 0,
    bad: 0
    });
  
const handleOnClickGood = () => {
  setClicks({
    ...clicks,
    good: clicks.good + 1,
  });
}

const handleOnClickNeutral = () => {
  setClicks({
    ...clicks,
    neutral: clicks.neutral + 1,
  });
}

const handleOnClickBad = () => {
  setClicks({
    ...clicks,
    bad: clicks.bad + 1,
  });
}


    return (
    <div className='container'>
      <Description />
      <Options click={handleOnClickGood} nameBtn={'Good'} />
      <Options click={handleOnClickNeutral} nameBtn={'Neutral'}/>
      <Options click={handleOnClickBad} nameBtn={'Bad'}/>
      <Feedback good={clicks.good} neutral={clicks.neutral} bad={ clicks.bad} />
    </div>
  )
}

export default App
