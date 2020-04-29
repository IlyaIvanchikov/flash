import React, { useState } from 'react'
import BlockParamaters from './BlockParameters/BlockParamaters'
import BlockResult from './BlockResult/BlockResult'
// import Grid from '@material-ui/core/Grid'
import './Main.css'

const Main = () => {
  const [time, setTime] = useState(0.1)
  const [countNumber, setCountNumber] = useState(1)


  return (
    <main className="main">
      <BlockParamaters />
      {/* <BlockResult test={[countNumber, time]} /> */}
    </main>
  )
}

export default Main
