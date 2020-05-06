import React, { useState, useRef } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send'
import './BlockAnswer.css'

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
    position: 'absolute',
    maxWidth: '40px',
    transform: 'translate(-118px, 11px)',
  },
  textField: {
    width: '30ch',
    paddingRight: '20px',
  },
}))

const BlockAnswer = (props) => {
  const classes = useStyles()
  const [answerText, setAnswerText] = useState('')
  const trueArr = props.trueArr
  const correctAudioPlayer = useRef()
  const wrongAudioPlayer = useRef()
  const handleTextField = (event) => {
    setAnswerText(event.target.value)
  }

  const startGame = (event) => {
    event.preventDefault()
    const strAnswer = trueArr.join('')
    if (strAnswer === answerText) {
      correctAudioPlayer.current.play()
    } else if (strAnswer !== answerText) {
      wrongAudioPlayer.current.play()
    }
    props.answerHandler(answerText)
    document.querySelector('#outlined-secondary').value = ''
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
            <audio
              src="https://zvukipro.com/uploads/files/2018-10/1540308965_jg-032316-sfx-elearning-incorrect-answer-sound-3.mp3"
              ref={wrongAudioPlayer}
            />
            <audio
              src="https://zvukipro.com/uploads/files/2018-10/1540308869_jg-032316-sfx-elearning-correct-answer-sound-1.mp3"
              ref={correctAudioPlayer}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default BlockAnswer
