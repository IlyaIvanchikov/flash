import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import './BlockControl.css'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const BlockControl = (props) => {
  const classes = useStyles()
  const startGame = () => {
    props.stateHandler()
  }

  return (
    <div className="blockControl blockShadow">
      <Grid container>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<KeyboardBackspaceSharpIcon />}
            onClick={startGame}
          >
            Начать заново
          </Button>
        </Grid>
        <Grid container item xs={6} justify="flex-end">
          <Typography variant="h4" component="h2">
            Баллы: <span>{props.score}</span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default BlockControl
