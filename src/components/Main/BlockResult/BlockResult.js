import React, { useEffect } from 'react'
import Fireworks from '../../../resources/img/Fireworks.gif'
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
import FireworksSound from '../../../resources/sound/fire.mp3'

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
  goodMessage: "Хороший результат, но тебе нужно еще потренироваться",
  successMessage: "Поздравляем, ты набрал максимальный балл!",
  minGameScore: 3,
  mediumGameScore: 4, 
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
  let sound = ""

  const SCORE = props.score
  let congrats
  if (SCORE > gameParams.mediumGameScore) {
    congrats = gameParams.successMessage
    sound = FireworksSound
  } else if (SCORE <= gameParams.mediumGameScore && SCORE >= gameParams.minGameScore) {
    congrats = gameParams.goodMessage
  } else {
    congrats = gameParams.failMessage
  }

  useEffect(() => {
      if (congrats === gameParams.successMessage) {
        setTimeout(() => {
          document.querySelector('.greatingsBlock').style.display = "block"
          setTimeout(() => {
            document.querySelector('.greatingsBlock').style.display = "none"
          }, 3000)
        }, 500)
      }
  });

  return (
    <div className="blockResult" >
      <div className="greatingsBlock">
        <img alt="Fireworks" src={Fireworks} />
        <audio
              src={sound}
              autoplay="autoplay"
            />
      </div>
      <Grid className="results blockShadow" container justify="center">
      <h3>{congrats}</h3>
        <Grid container alignItems="center"  justify="center" item xs={12}>
          <p>Ты набрал {declOfNum(SCORE, BALL_STRING)} из {gameParams.maxGameScore} возможных</p>
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
