import React, { useState } from 'react'
import BlockParameters from './BlockParameters/BlockParamaters'
import BlockResult from './BlockResult/BlockResult'
import BlockPlay from './BlockPlay/BlockPlay'
import './Main.css'

const Main = (props) => {
  const [time, setTime] = useState(0.1)
  const [countNumber, setCountNumber] = useState(1)
  const [checkParams, setCheckParams] = useState(true)
  const [score, setScore] = useState(0)
  const [checkResult, setCheckResult] = useState(false)

  const checkHandler = (time, countNumber, name) => {
    console.log(`time: ${time} + countNumber: ${countNumber} + name: ${name}`)
    setCountNumber(countNumber)
    props.handleName(name)
    setTime(time)
    setCheckParams(false)
  }

  const paramsHandler = () => {
    // setCheckResult(!checkResult)
    setCheckParams(!checkParams)
  }

  let mainContent
  // if (checkResult) mainContent = <BlockParameters dataParams={checkHandler} />
  if (checkParams) {
    mainContent = <BlockParameters dataParams={checkHandler} />
  } else {
    // mainContent = <BlockResult time={time} name={props.name} stateHandler={paramsHandler} score={score}/>
    mainContent = <BlockPlay stateHandler={paramsHandler} score={score} countNumber={countNumber}/>
  }
  return <main className="main">{mainContent}</main>
}

export default Main
