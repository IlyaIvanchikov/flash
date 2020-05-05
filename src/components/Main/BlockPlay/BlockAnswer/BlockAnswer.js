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
  
  const classes = useStyles()
  const [answerText, setAnswerText] = useState('')

  const handleTextField = event => {
    setAnswerText(event.target.value)
  }

  // const focusElem = () => {
  //   if (rounds > 1) {
  //     setTimeout(() => document.querySelector('.blockPicture').focus(), 10)
  //     setTimeout(() => {
  //       document.querySelector('#outlined-secondary').focus()
        
  //     }, 100)
  //   }
  // }

const startGame = () => {
    props.answerHandler(answerText)
    setAnswerText('')
}

  return (
    <div tabIndex="4" className="blockAnswer">
      <Grid container>
        <Grid item container justify="center" alignItems="center" xs={12}>
          <TextField
            className={classes.textField}
            id="outlined-secondary"
            label="Вводите сюда свой ответ"
            variant="outlined"
            value={answerText}
            color="primary"
            onChange={handleTextField}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SendIcon />}
            onClick={startGame}
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default BlockAnswer
