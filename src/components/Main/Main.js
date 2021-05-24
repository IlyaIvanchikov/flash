import React, { useState } from 'react'
import BlockParameters from './BlockParameters/BlockParamaters'
import AuthForm from './AuthForm/AuthForm'
import BlockResult from './BlockResult/BlockResult'
import BlockPlay from './BlockPlay/BlockPlay'
import axios from 'axios'
import './Main.css'

const URL = 'https://pifagoriyatsk.ru';
const isLocked = true // закрыто авторизацией

const Main = (props) => {
  const { token, setToken, name, handleName } = props
  const [auth, setAuth] = useState(!isLocked)
  const [loading, setLoading] = useState(token ? true : false)
  const [time, setTime] = useState(0.1)
  const [countNumber, setCountNumber] = useState(1)
  const [checkParams, setCheckParams] = useState(true)
  const [score, setScore] = useState(0)
  const [countRound, setCountRound] = useState(0)
  const [error, setError] = useState(false)
  const countRoundPlay = 10

  if (token) {
    axios
      .get(`${URL}/wp-json/wp/v2/users/me?context=edit`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { first_name } = res.data;
        localStorage.setItem('name', first_name);
        handleName(first_name)
        setLoading(false);
        setAuth(true);
      })
      .catch(err => {
        localStorage.removeItem('token')
        localStorage.removeItem('name');
        setLoading(false);
      })
  } else {
    // window.location.replace('https://pifagoriyatsk.ru/app-auth?app=build');
    if (!checkParams) setCheckParams(true)
  }

  const checkHandler = (time, countNumber, name) => {
    setCountNumber(countNumber)
    handleName(name)
    setTime(time)
    setCheckParams(false)
  }

  const errHandler = () => {
    setError(true)
    setLoading(true)
    setInterval(() => {
      setError(false)
      setLoading(false)
    }, 2000)
  }

  const paramsHandler = () => {
    setCheckParams(!checkParams)
    setCountRound(0)
    setScore(0)
  }

  const clickHandler = score => {
    setCountRound(countRound + 1)
    setScore(score)
  }
  let mainContent
  if (checkParams) {
    if (!auth) {
      if (loading) {
        const textInfo = !error ? 'Загрузка...' : '[Ошибка. Неправильный логин или пароль]'
        mainContent = <p className="loading">{textInfo}</p>
      } else {
        mainContent = <AuthForm errorHandler={errHandler} handler={setToken}/>
      }
    } else {
      mainContent = <BlockParameters dataParams={checkHandler} name={name}/>
    }
  } else if (!checkParams && countRound < countRoundPlay) {
    mainContent = (
      <BlockPlay
        stateHandler={paramsHandler}
        answerClickHandler={clickHandler}
        score={score}
        time={time}
        countNumber={countNumber}
        countRound={countRound}
      />
    )
  } else {
    mainContent = (
      <BlockResult
        time={time}
        name={name}
        stateHandler={paramsHandler}
        score={score}
        countRoundPlay={countRoundPlay}
      />
    )
  }
  return <main className="main">{mainContent}</main>
}

export default Main
