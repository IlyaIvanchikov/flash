import React, { useState } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
}))


const App = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const classes = useStyles()

  const checkName = name => {
    setName(name);
  }

  const exitHandler = () => {
    console.log('выхожу')
    localStorage.removeItem('token');
    setToken('')
    localStorage.removeItem('name');
    setName('')
  }

  return (
    <div className={classes.root}>
      <Header exitHandler={exitHandler} name={name} />
      <Main setToken={setToken} token={token} handleName={checkName} name={name}/>
      <Footer />
    </div>
  )
}

export default App
