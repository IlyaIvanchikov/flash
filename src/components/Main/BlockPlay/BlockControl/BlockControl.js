import React from 'react'
import { Input, Button, Grid } from '@material-ui/core'

import Control from './BlockControl/BlockControl'
import Answer from './BlockAnswer/BlockAnswer'
import Picture from './BlockPicture/BlockPicture'
import './BlockPlay.css'

const BlockPlay = (props) => {
  return (
    <div className="blockPlay">
      <Control />
      <Picture />
      <Answer />
    </div>
  )
}

export default BlockPlay
