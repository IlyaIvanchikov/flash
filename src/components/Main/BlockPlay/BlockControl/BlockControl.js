import React from 'react'
import { Button, Grid } from '@material-ui/core'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import questionMark from '../../../../resources/img/question.jpg'
// import Picture from '../BlockPicture/BlockPicture'
import './BlockControl.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const Picture = React.lazy(() => import('../BlockPicture/BlockPicture'));

const BlockControl = (props) => {
  const show = props.show
  const trueArr = props.trueArr
  const countNumber = props.countNumber
  const score = props.score

  const countPicture = [...Array(countNumber)].map((e, i) => (
    <Picture key={i} random={trueArr[i]} />
  ))

  const thinkingPicture = (
    <img className="questionImg" alt="question" src={questionMark} />
  )

  const startGame = () => {
    props.stateHandler()
  }

  return (
    <div className="blockControl">
      <Grid container spacing={3}>
        <Grid
          item
          md={12}
          lg={3}
          container
          direction="column"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<KeyboardBackspaceSharpIcon />}
            onClick={startGame}
          >
            Начать заново
          </Button>
        </Grid>
        <React.Suspense fallback={<CircularProgress />}>
        <Grid
          item
          md={12}
          lg={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="blockShadow blockCard"
        >
          {show && countPicture}
          {!show && thinkingPicture}
        </Grid>
        </React.Suspense>
        <Grid
          container
          item
          md={12}
          lg={3}
          direction="row"
          justify="center"
        >
          <p className="p-blockControl">
            Баллы: <span>{score}</span>
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default BlockControl
