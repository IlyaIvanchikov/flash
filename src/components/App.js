import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    position: 'relative',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
