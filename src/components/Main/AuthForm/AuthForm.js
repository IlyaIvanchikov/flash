import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  Button
} from '@material-ui/core'
import './AuthForm.css'
import axios from 'axios'

const URL = 'https://pifagoriyatsk.ru';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250
  },
  button: {
    width: 140
  },
  formControl: {
    margin: theme.spacing(3),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonCheckParams: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}))

const AuthForm = (props) => {
  const classes = useStyles()
  const [name, setName] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleNameField = (event) => {
    setName(event.target.value)
  }

  const handlePassField = (event) => {
    setPass(event.target.value)
  }

  const checkData = (event) => {
    event.preventDefault()
    setLoading(true)
    const loginData = { username: name, password: pass };
    axios
      .post(`${URL}/wp-json/jwt-auth/v1/token`, loginData)
      .then((res) => {
        if (res.data.token) {
          const { token } = res.data;
          localStorage.setItem('token', token);
          props.handler(token)
        }
      })
      .catch((err) => {
        setLoading(false)
        props.errorHandler()
        console.log('err')
      });

  }

  let authContent = !loading ? (<div className="authForm"><form onSubmit={checkData} className="formGroup blockShadow">
  <h3 className="h3">Сначала нужно войти</h3>
  <TextField
    label="Введите ваш логин"
    defaultValue={name}
    variant="outlined"
    required
    onChange={handleNameField}
  />
  <div className="passInput">
    <TextField
      label="Введите ваш пароль"
      type="password"
      defaultValue={pass}
      variant="outlined"
      required
      onChange={handlePassField}
    />
  </div>
  <Button
    variant="contained"
    color="primary"
    type="submit"
    className={classes.buttonCheckParams}
  >
    Войти
  </Button>
</form></div>) : <p className="loading">Загрузка...</p>

  return authContent
}

export default AuthForm
