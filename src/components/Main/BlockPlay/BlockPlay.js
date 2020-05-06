import React, { useState, useEffect, useRef } from 'react'
import Control from './BlockControl/BlockControl'
import Answer from './BlockAnswer/BlockAnswer'
import Picture from './BlockPicture/BlockPicture'
import quastionMark from '../../../resources/img/quastion.jpg'
import './BlockPlay.css'

const BlockPlay = (props) => {
  const correctAudioPlayer = useRef();
  const wrongAudioPlayer = useRef();
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
  console.log(trueArr)
  const paramsHandler = () => {
    props.stateHandler()
  }

  const checkAnswer = (answer) => {
    props.answerClickHandler()
    setSpecifiedAnswer(answer)
    const strAnswer = trueArr.join('')
    console.log(strAnswer)
    if (strAnswer === specifiedAnswer) {
      correctAudioPlayer.current.play();
    }
    else {
      wrongAudioPlayer.current.play();
    }
    arr = []
    setTrueArr(createArr(arr))
    setShow(!show)
  }

  //Условный рендеринг картинки
  useEffect(() => {
     setTimeout(() => {
      setShow(false)
    }, time);
  }, [countRound, time])

  const countPicture = [...Array(countNumber)].map((e, i) => (
    <Picture key={i} random={trueArr[i]} />
  ))
  const thinkingPicture = <img className="questionImg" alt="quastion" src={quastionMark} />
  return (
    <div className="blockPlay">
      <Control stateHandler={paramsHandler} score={props.score} />
      <div className="blockCard">
        {show && countPicture}
        {!show && thinkingPicture}
        <audio src="https://zvukipro.com/uploads/files/2018-10/1540308965_jg-032316-sfx-elearning-incorrect-answer-sound-3.mp3" ref={correctAudioPlayer}/> 
        <audio src="https://zvukipro.com/uploads/files/2018-10/1540308869_jg-032316-sfx-elearning-correct-answer-sound-1.mp3" ref={wrongAudioPlayer} />
      </div>
      <Answer rounds={props.countRound} answerHandler={checkAnswer} show={show}/>
    </div>
  )
}

export default BlockPlay
