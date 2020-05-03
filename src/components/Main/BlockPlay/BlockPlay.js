import React, { useState } from 'react'
import Control from './BlockControl/BlockControl'
import Answer from './BlockAnswer/BlockAnswer'
import Picture from './BlockPicture/BlockPicture'
import './BlockPlay.css'

const BlockPlay = (props) => {

  const [trueNumber, setTrueNumber] = useState([])
  
  const paramsHandler = () => {
    props.stateHandler()
  }
  let countTrueAnswer = [];
  const answerHandler = (number) => {
    countTrueAnswer.push(number)
    setTrueNumber(countTrueAnswer)
  }
  console.log(countTrueAnswer)
  // console.log(trueNumber)
  const countPicture = [...Array(props.countNumber)].map((e, i) => (
    <Picture key={i} currentHandler={answerHandler}/>
  ))
  return (
    <div className="blockPlay">
      <Control stateHandler={paramsHandler} score={props.score} />
      <div className="blockCard">{countPicture}</div>
      <Answer />
    </div>
  )
}

export default BlockPlay
