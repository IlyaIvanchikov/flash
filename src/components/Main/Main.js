import React, { useState } from 'react'
import BlockParameters from './BlockParameters/BlockParamaters'
import AuthForm from './AuthForm/AuthForm'
import BlockResult from './BlockResult/BlockResult'
import BlockPlay from './BlockPlay/BlockPlay'
import axios from 'axios'
import './Main.css'

const URL = 'https://pifagoriyatsk.ru';

const Main = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const name = props.name
  const [isLocked, setIsLocked] = useState(true)
  const [loading, setLoading] = useState(token ? true : false)
  const [time, setTime] = useState(0.1)
  const [countNumber, setCountNumber] = useState(1)
  const [checkParams, setCheckParams] = useState(true)
  const [score, setScore] = useState(0)
  const [countRound, setCountRound] = useState(0)
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
        props.handleName(first_name)
        setLoading(false);
        setIsLocked(false);
      })
      .catch(err => {
        localStorage.removeItem('token')
        setLoading(false);
        window.location.replace('/')
      })
  } else {
    // window.location.replace('https://pifagoriyatsk.ru/app-auth?app=build');
  }

  const checkHandler = (time, countNumber, name) => {
    setCountNumber(countNumber)
    props.handleName(name)
    setTime(time)
    setCheckParams(false)
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
    if (isLocked) {
      if (loading) {
        mainContent = <p className="loading">Загрузка...</p>
      } else {
        mainContent = <AuthForm handler={setToken}/>
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
        name={props.name}
        stateHandler={paramsHandler}
        score={score}
        countRoundPlay={countRoundPlay}
      />
    )
  }
  return <main className="main">{mainContent}</main>
}

export default Main
