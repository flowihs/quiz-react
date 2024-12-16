import './index.scss';
import { questions } from './data/question';
import Game from './components/Game';
import Result from './components/Result';
import React from 'react';

function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)

  const question = questions[step]

  const onClickVariant = (index) => {
    console.log(step, index)
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? 
        <Game step={step} onClickVariant={onClickVariant} question={question}  /> :
        <Result correct={correct}/>
      }   
    </div>
  );
}

export default App;
