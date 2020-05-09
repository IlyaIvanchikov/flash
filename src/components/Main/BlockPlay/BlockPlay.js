import React, { useState, useEffect } from 'react'
import Control from './BlockControl/BlockControl'
import Answer from './BlockAnswer/BlockAnswer'
import Picture from './BlockPicture/BlockPicture'
import quastionMark from '../../../resources/img/quastion.jpg'

import './BlockPlay.css'
//const Picture = React.lazy(() => import('./BlockPicture/BlockPicture'));
const BlockPlay = (props) => {
  const countNumber = props.countNumber
  const countRound = props.countRound
  const score = props.score
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
  const paramsHandler = () => {
    props.stateHandler()
  }

  const checkAnswer = (answer, score) => {
    props.answerClickHandler(score)
    arr = []
    setTrueArr(createArr(arr))
    setShow(!show)
  }

  useEffect(() => {
     setTimeout(() => {
      setShow(false)
    }, time);
  }, [countRound, time])

  const countPicture = [...Array(countNumber)].map((e, i) => (
    <Picture key={i} random={trueArr[i]}/>
  ))

  const thinkingPicture = <img className="questionImg" alt="quastion" src={quastionMark} />
  return (
    <div className="blockPlay">
      <Control stateHandler={paramsHandler} score={score} />
      <div className="blockCard blockShadow">
        {show && countPicture}
        {!show && thinkingPicture}
      </div>
      <Answer rounds={props.countRound} answerHandler={checkAnswer} show={show} score={score} trueArr={trueArr}/>
    </div>
  )
}

export default BlockPlay
