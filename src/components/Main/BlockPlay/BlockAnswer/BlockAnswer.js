import React, { useState } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send';
import './BlockAnswer.css'
// import { doc } from 'prettier';

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
    position: "absolute",
    maxWidth: "40px",
    transform: "translate(-118px, 11px)"
  },
  textField: {
    width: '30ch',
    paddingRight: "20px"
  },
}))


const BlockAnswer = (props) => {
  
  const DEFAULT_ROUNDS = 5
  const classes = useStyles()
  const [answerText, setAnswerText] = useState('')
  const [rounds, setRound] = useState(DEFAULT_ROUNDS)

  const handleTextField = event => {
    let answer = event.target.value
    if (answer === "0" || +answer > 0) {
      // document.querySelector('#submit').disabled = false
      // document.querySelector('#outlined-secondary').setAttribute('aria-invalid', true)
      setAnswerText(+answer) 
      
    } else {
      setAnswerText(null)
      // document.querySelector('#submit').disabled = true
      // document.querySelector('#outlined-secondary').setAttribute('aria-invalid', false)
    }
  }

  const focusElem = () => {
    if (rounds > 1) {
      setTimeout(() => document.querySelector('.blockPicture').focus(), 10)
      setTimeout(() => {
        document.querySelector('#outlined-secondary').focus()
        
      }, 100)
    }
  }


  const startGame = event => {
    event.preventDefault();
    const input = document.querySelector('#outlined-secondary')
    input.readonly = true
    if (answerText !== null) {
      props.answerHandler(answerText)
      const counter = rounds - 1
      setRound(counter)
      focusElem()
      input.value = ""
    } else {
      alert('введите число')
      input.value = ""
    }
  }

  return (
    <div tabIndex="4" className="blockAnswer">
      <Grid container>
        <Grid item container justify="center" alignItems="center" xs={12}>
        <form id="answerForm" onSubmit={startGame}>
            <TextField
              type="number"
              className={classes.textField}
              id="outlined-secondary"
              label="Введите ответ"
              variant="outlined"
              color="primary"
              onInput={handleTextField}
            />
            <Button
              variant="contained"
              id="submit"
              type="submit"
              color="primary"
              prevent="true"
              className={classes.button}
              startIcon={<SendIcon />}
              onClick={startGame}
            >
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default BlockAnswer
