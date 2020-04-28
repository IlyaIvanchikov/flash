import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import Logo from '../../resources/img/tl.png';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
    <Grid container alignItems="center" >
      <Grid container item  xs={8} sm={6} direction="row" alignItems="center">
        <img src={Logo} alt="logo" className="logo"/>
        <Hidden smDown>
        <h1 className="h1-header">Флеш-карточки</h1>
        </Hidden>
      </Grid>
      <Grid container justify="flex-end" item xs={4} sm={6}>
        <p className="p-header">Добро пожаловать!</p>
      </Grid>
    </Grid>
    </header>
  )
}

export default Header
