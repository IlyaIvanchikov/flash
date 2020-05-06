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
      setAnswerText(answerText) 
  }

  const startGame = event => {
    event.preventDefault();
    props.answerHandler(answerText)
    document.querySelector('#outlined-secondary').value = ""
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
            >
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default BlockAnswer
