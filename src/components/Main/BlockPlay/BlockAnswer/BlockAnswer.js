import React, { useState, useRef } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send'
import wrongAnswer from '../../../../resources/sound/wrong.mp3'
import correctAnswer from '../../../../resources/sound/correct.mp3'
import './BlockAnswer.css'


const useStyles = makeStyles((theme) => ({
  button: {
    position: "absolute",
    maxWidth: "40px",
    transform: "translate(-118px, 11px)"
  },
  textField: {
    width: '30ch',
    paddingRight: '20px',
    left: '10px'
  },
}))

const BlockAnswer = (props) => {
  const classes = useStyles()
  const [answerText, setAnswerText] = useState('')
  const trueArr = props.trueArr
  const show = props.show
  const score = props.score
  let buttonAnswer
  const correctAudioPlayer = useRef()
  const wrongAudioPlayer = useRef()
  const handleTextField = (event) => {
    setAnswerText(event.target.value)
  }

  const startGame = (event) => {
    event.preventDefault()
    const strAnswer = trueArr.join('')
    if (strAnswer === answerText) {
      props.answerHandler(answerText, score+1)
      correctAudioPlayer.current.currentTime = 0;
      correctAudioPlayer.current.play()
    } else if (strAnswer !== answerText) {
      props.answerHandler(answerText, score)
      wrongAudioPlayer.current.currentTime = 0;
      wrongAudioPlayer.current.play()
    }
    document.querySelector('#outlined-secondary').value = ''
  }

  if (show) {
    buttonAnswer = (
      <Button
        variant="contained"
        children={false}
        id="submit"
        type="submit"
        color="primary"
        prevent="true"
        className={classes.button}
        startIcon={<SendIcon />}
        disabled
      ></Button>
    )
  } else {
    buttonAnswer = (
      <Button
        variant="contained"
        children={false}
        id="submit"
        type="submit"
        color="primary"
        prevent="true"
        className={classes.button}
        startIcon={<SendIcon />}
      ></Button>
    )
  }

  return (
    <div tabIndex="4" className="blockAnswer">
      <Grid container>
        <Grid item container justify="center" alignItems="center" xs={12}>
          <form id="answerForm" onSubmit={startGame}>
            <TextField
              type="number"
              required
              className={classes.textField}
              id="outlined-secondary"
              label="Введите ответ"
              variant="outlined"
              color="primary"
              onChange={handleTextField}
            />
            {buttonAnswer}
            <audio
              src={wrongAnswer}
              ref={wrongAudioPlayer}
            />
            <audio
              src={correctAnswer}
              ref={correctAudioPlayer}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default BlockAnswer