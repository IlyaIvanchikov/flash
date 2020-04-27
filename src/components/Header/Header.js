import React from 'react'
import Grid from '@material-ui/core/Grid'
import './Header.css'

const Header = () => {
  return (
    <Grid container className="header">
      <Grid item xs={4}>
        <p>Test</p>
      </Grid>
      <Grid item xs={2}>
        <h1>Флеш-карточки</h1>
      </Grid>
      <Grid item xs={6}>
        <p>Добро пожаловать!</p>
      </Grid>
    </Grid>
  )
}

export default Header
