import React from 'react'
import Control from './BlockControl/BlockControl'
import Answer from './BlockAnswer/BlockAnswer'
import Picture from './BlockPicture/BlockPicture'
import './BlockPlay.css'

const BlockPlay = (props) => {
  const paramsHandler = () => {
    props.stateHandler()
  }
  const countPicture = [...Array(props.countNumber)].map((e, i) => (
    <Picture key={i} />
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
