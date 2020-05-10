import React from 'react'
import{ Grid } from '@material-ui/core'
import Logo from '../../resources/img/tl.png';
import './Header.css'

const DEFAULT_NAME = "дорогой друг"
const SITE_TITLE = "Тренажер: Флеш-карты"
const SALUTATION = "Здравствуй, "

const Header = (props) => {
  return (
    <header className="header blockShadow">
      <Grid container alignItems="center">
        <Grid container item  xs={4} sm={6} direction="row" alignItems="center">
          <a className="link-logo" href="/"><img src={Logo} alt="logo" className="logo"/></a>
          <Grid container item xs={6} sm={6} direction="row" alignItems="center">
          <h1 className="header-title">{SITE_TITLE}</h1>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" item xs={8} sm={6}>
          <p className="p-header">
            <a href="https://pifagoriyatsk.ru/866-2/trenajor/" >
            &#9668; К тренажерам
            </a>
            <span className="header-salutation" >
            {SALUTATION + (props.name || DEFAULT_NAME)}!
            </span>
          </p>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
