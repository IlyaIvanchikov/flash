import React, { useState } from 'react'
import BlockParameters from './BlockParameters/BlockParamaters'
import BlockResult from './BlockResult/BlockResult'
import BlockPlay from './BlockPlay/BlockPlay'
import './Main.css'

const Main = (props) => {
  const name = props.name
  const [time, setTime] = useState(0.1)
  const [countNumber, setCountNumber] = useState(1)
  const [checkParams, setCheckParams] = useState(true)
  const [score, setScore] = useState(0)
  const [countRound, setCountRound] = useState(0)
  const countRoundPlay = 10

  const checkHandler = (time, countNumber, name) => {
    setCountNumber(countNumber)
    props.handleName(name)
    setTime(time)
    setCheckParams(false)
  }

  const paramsHandler = () => {
    setCheckParams(!checkParams)
    setCountRound(0)
    setScore(0)
  }

  const clickHandler = score => {
    setCountRound(countRound + 1)
    setScore(score)
  }
  let mainContent
  if (checkParams) {
    mainContent = <BlockParameters dataParams={checkHandler} name={name}/>
  } else if (!checkParams && countRound < countRoundPlay) {
    mainContent = (
      <BlockPlay
        stateHandler={paramsHandler}
        answerClickHandler={clickHandler}
        score={score}
        time={time}
        countNumber={countNumber}
        countRound={countRound}
      />
    )
  } else {
    mainContent = (
      <BlockResult
        time={time}
        name={props.name}
        stateHandler={paramsHandler}
        score={score}
        countRoundPlay={countRoundPlay}
      />
    )
  }
  return <main className="main">{mainContent}</main>
}

export default Main
