import React, { useState } from 'react'
import BlockPatameters from './BlockParameters/BlockParamaters'
import Grid from '@material-ui/core/Grid'
import Logo from '../../resources/img/back.jpg';
import './Main.css'

const Main = () => {
  const [time, setTime] = useState(0.1)
  const [countNumber, setCountNumber] = useState(1)

  return (
    <main className="main">
      <div className="test">

      </div>
    </main>
  )
}

export default Main
