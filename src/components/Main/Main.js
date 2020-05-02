import React, { useState } from 'react'
import BlockParameters from './BlockParameters/BlockParamaters'
import BlockResult from './BlockResult/BlockResult'
import './Main.css'

const Main = () => {
  const [time, setTime] = useState(0.1)
  const [countNumber, setCountNumber] = useState(1)
  const [checkParams, setCheckParams] = useState(true)
  const [name, setName] = useState('')
  const [checkResult, setCheckResult] = useState(false)

  const checkHandler = (time, countNumber, name) => {
    console.log(`time: ${time} + countNumber: ${countNumber} + name: ${name}`)
    setCountNumber(countNumber)
    setName(name)
    setTime(time)
    setCheckParams(false)
  }

  const resultHander = () => {
    // setCheckResult(!checkResult)
    setCheckParams(!checkParams)
  }

  let mainContent
  // if (checkResult) mainContent = <BlockParameters dataParams={checkHandler} />
  if (checkParams) {
    mainContent = <BlockParameters dataParams={checkHandler} />
  } else {
    mainContent = <BlockResult time={time} name={name} stateHandler={resultHander}/>
  }
  return <main className="main">{mainContent}</main>
}

export default Main
