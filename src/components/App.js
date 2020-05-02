import React, { useState } from 'react'
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


const App = () => {
  const [name, setName] = useState('');
  const classes = useStyles()

  const checkName = name => {
    setName(name);
  }

  return (
    <div className={classes.root}>
      <Header name={name} />
      <Main handleName={checkName}/>
      <Footer />
    </div>
  )
}

export default App
