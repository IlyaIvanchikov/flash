import React from 'react'
import Grid from '@material-ui/core/Grid'
import Logo from '../../resources/img/SKILL.jpg';
import './Header.css'

const Header = () => {
  return (
    <Grid container alignItems="center" className="header">
      <Grid container item  xs={12} sm={6} direction="row" alignItems="center">
        <img src={Logo} alt="logo" className="logo"/>
        <h1 className="h1-header">Флеш-карточки</h1>
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>Добро пожаловать!</p>
      </Grid>
    </Grid>
  )
}

export default Header
