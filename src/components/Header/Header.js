import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import Logo from '../../resources/img/tl.png';
import './Header.css'

const DEFAULT_NAME = "друг"
const SITE_TITLE = "Тренажер: Флеш-карты"
const SALUTATION = "Рады тебя видеть, "

const Header = (props) => {
  return (
    <header className="header blockShadow">
      <Grid container alignItems="center">
        <Grid container item  xs={8} sm={6} direction="row" alignItems="center">
          <a className="link-logo" href="/"><img src={Logo} alt="logo" className="logo"/></a>
          <Hidden smDown>
          <h1 className="h1-header">{SITE_TITLE}</h1>
          </Hidden>
        </Grid>
        <Grid container justify="flex-end" item xs={4} sm={6}>
          <p className="p-header">{SALUTATION + (props.name || DEFAULT_NAME)}!</p>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
