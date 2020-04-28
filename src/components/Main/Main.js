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
    <Grid container alignItems="center" >
      <Grid container item  xs={8} sm={6} direction="row" alignItems="center">
        <img src={Logo} alt="logo" className="logo1"/>
      </Grid>
    </Grid>
    </main>
  )
}

export default Main
