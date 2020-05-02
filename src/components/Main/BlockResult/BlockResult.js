import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  // TextField,
  // FormGroup,
  // Typography,
  // InputLabel,
  // MenuItem,
  // FormControl,
  // Select,
  // Slider,
  // Input,
  Button,
  Grid,
} from '@material-ui/core'
import './BlockResult.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  button: {
    width: 140,
  },
  buttonCheckParams: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  }
}))

const gameParams = {
  failMessage: "В этот раз не получилось",
  successMessage: "Поздравляем",
  minGameScore: 4,
  maxGameScore: 5
}

// Функция склоняет слова от количества (3 варианта)
function declOfNum(n, titles) {
  return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
                          0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
  }

const BALL_STRING = ['балл', 'балла', 'баллов'];

const BlockResult = (props) => {

  const startGame = () => {
    props.stateHandler()
  }

  const classes = useStyles()
  const score = props.time // временнная переменная тестирования
  let congrats
  if (score >= gameParams.minGameScore) {
    congrats = `${gameParams.successMessage}, ${props.name}!`
  } else {
    congrats = gameParams.failMessage
  }

  return (
    <div className="blockResult" >
      <Grid className="results" container justify="center">
      <h3>{congrats}</h3>
        <Grid container alignItems="center"  justify="center" item xs={12}>
          <p>Ты набрал {declOfNum(score, BALL_STRING)} из {gameParams.maxGameScore} возможных</p>

        {/* <Input
              readOnly
              value={score}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 0.1,
                min: 0.1,
                max: 5,
                type: 'number',
                'aria-labelledby': 'input-slider',
                size: 3
              }}
            /> */}
        </Grid>
        <Grid container justify="center"  item xs={12}>
          <Button className={classes.buttonCheckParams} variant="contained" color="primary" onClick={startGame}>
            ИГРАТЬ ЕЩЕ РАЗ
          </Button>
        </Grid>
      </Grid>
    </div>

  )
}

export default BlockResult
