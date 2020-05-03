import React from 'react'
import { Input, Button, Grid } from '@material-ui/core'

import Control from './BlockControl/BlockControl'
import Answer from './BlockAnswer/BlockAnswer'
import Picture from './BlockPicture/BlockPicture'
import './BlockPlay.css'

const BlockPlay = (props) => {
  const paramsHandler = () => {
    props.stateHandler()
  }
  return (
    <div className="blockPlay">
      <Control stateHandler={paramsHandler} score={props.score}/>
      {/* <Picture />*/}
      <Answer /> 
    </div>
  )
}

export default BlockPlay
