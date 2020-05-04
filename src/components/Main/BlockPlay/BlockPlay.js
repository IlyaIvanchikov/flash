import React, { useState, useEffect } from 'react'
import Control from './BlockControl/BlockControl'
import Answer from './BlockAnswer/BlockAnswer'
import Picture from './BlockPicture/BlockPicture'
import './BlockPlay.css'

const BlockPlay = (props) => {
  const countNumber = props.countNumber
  const arr = []
  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const createArr = (arr) => {
    for (let i = 0; i < countNumber; i++) {
      arr.push(getRandomInRange(0, 9))
    }
    return arr
  }

  const [trueArr, setTrueArr] = useState(createArr(arr))

  const paramsHandler = () => {
    props.stateHandler()
  }

  let countPicture

  const timeRepeatPicture = () => {
     (countPicture = [...Array(countNumber)].map((e, i) => (
      <Picture key={i} random={trueArr[i]} />
    )))
  }
  const timeBlackPicture = () => {
     (countPicture = <p>Hello</p>)
  }
  timeRepeatPicture();
  
  useEffect( () => {
    setTimeout(timeBlackPicture, 5000)
  },[])

  return (
    <div className="blockPlay">
      <Control stateHandler={paramsHandler} score={props.score} />
      <div className="blockCard">{countPicture}</div>
      <Answer />
    </div>
  )
}

export default BlockPlay
