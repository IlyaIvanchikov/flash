import React, { useState, useEffect } from 'react'
import Control from './BlockControl/BlockControl'
import Answer from './BlockAnswer/BlockAnswer'
import Picture from './BlockPicture/BlockPicture'
import './BlockPlay.css'

const BlockPlay = (props) => {
  const countNumber = props.countNumber
  const countRound = props.countRound
  const time = props.time * 1000
  let arr = []

  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const createArr = (arr) => {
    for (let i = 0; i < countNumber; i++) {
      arr.push(getRandomInRange(0, 9))
    }
    return arr
  }

  const [show, setShow] = useState(true)
  const [trueArr, setTrueArr] = useState(createArr(arr))
  const [specifiedAnswer, setSpecifiedAnswer] = useState('')

  const paramsHandler = () => {
    props.stateHandler()
  }

  const checkAnswer = (answer) => {
    arr = []
    props.answerClickHandler()
    setTrueArr(createArr(arr))
    setSpecifiedAnswer(answer)
    setShow(!show)
  }

  //Условный рендеринг картинки
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, time)
  },[countRound])

  const countPicture = [...Array(countNumber)].map((e, i) => (
    <Picture key={i} random={trueArr[i]} />
  ))
  const thinkingPicture = <p>Подумайте</p>

  return (
    <div className="blockPlay">
      <Control stateHandler={paramsHandler} score={props.score} />
      <div className="blockCard">
        {show && countPicture}
        {!show && thinkingPicture}
      </div>
      <Answer rounds={props.countRound} answerHandler={checkAnswer} />
    </div>
  )
}

export default BlockPlay
