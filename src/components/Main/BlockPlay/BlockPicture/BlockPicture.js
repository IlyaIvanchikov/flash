import React from 'react'
import './BlockPicture.css'
import StickAbakus from '../../../../resources/img/abakus/stick.png'
import BoneAbakus from '../../../../resources/img/abakus/bone.png'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const digits = 5

const useStyles = makeStyles((theme) => ({
  bone5On: {
    marginTop: 0,
    height: '18px',
  },
  bone5Off: {
    marginTop: '17px',
    height: '18px',
  },
  button: {
    width: 140,
  },
  boneOn: {
    transform: 'translateY(0px) !important',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonCheckParams: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}))

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function MediaCard(props) {
  const classes = useStyles()
  const number = getRandomInRange(0, 9)
  props.currentHandler(number)
  const isMoveBone = []
  if (number === 0 || number === 5) {
    for (let i = 0; i < 4; i++) {
      isMoveBone.push(false)
    }
  } else {
    if (number === 1 || number === 6) {
      isMoveBone.push(true)
      for (let i = 1; i < 4; i++) {
        isMoveBone.push(false)
      }
    }
    if (number === 2 || number === 7) {
      isMoveBone.push(true)
      isMoveBone.push(true)
      for (let i = 2; i < 4; i++) {
        isMoveBone.push(false)
      }
    }
    if (number === 3 || number === 8) {
      isMoveBone.push(true)
      isMoveBone.push(true)
      isMoveBone.push(true)
      for (let i = 3; i < 4; i++) {
        isMoveBone.push(false)
      }
    }
    if (number === 4 || number === 9) {
      for (let i = 0; i < 4; i++) {
        isMoveBone.push(true)
      }
      isMoveBone.push(false)
    }
  }

  return (
    <div className="blockPicture">
      <p>{number}</p>
      <div className="oneStick">
        <div className="stickTop">
          <img
            alt=""
            className={number > 4 ? classes.bone5Off : classes.bone5On}
            src={BoneAbakus}
          />
        </div>
        <div className="stickBottom">
          <img
            alt=""
            src={BoneAbakus}
            className={isMoveBone[0] ? classes.boneOn : ''}
          />
          <img
            alt=""
            src={BoneAbakus}
            className={isMoveBone[1] ? classes.boneOn : ''}
          />
          <img
            alt=""
            src={BoneAbakus}
            className={isMoveBone[2] ? classes.boneOn : ''}
          />
          <img
            alt=""
            src={BoneAbakus}
            className={isMoveBone[3] ? classes.boneOn : ''}
          />
        </div>
      </div>
    </div>
  )
}
