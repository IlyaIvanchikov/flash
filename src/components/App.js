import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: 'red',
    height: '100vh'
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item xs={12}>
          <Header />
        </Grid>
        <Grid container item xs={12}>
          <Main />
        </Grid>
        <Grid container item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
