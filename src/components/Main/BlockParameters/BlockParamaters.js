import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  FormGroup,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
  Select,
  Grid,
  Slider,
  Input,
} from '@material-ui/core'
import TimerIcon from '@material-ui/icons/Timer'
import './BlockParameters.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  // input: {
  //   width: 40,
  // },
  button: {
    width: 140,
  },
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 20,
  // },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const BlockParameters = (props) => {
  const classes = useStyles()

  const [time, setTime] = React.useState(1)
  const [countNumber, setCountNumber] = React.useState('')
  const [name, setName] = React.useState('Пользователь')

  const handleTextField = (event) => {
    setName(event.target.value)
  }

  const handleSliderChange = (event, newValue) => {
    setTime(newValue)
  }
  // const handleChange = (event) => {
  //   setAge(event.target.value)
  // }
  const handleInputChange = (event) => {
    setTime(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (time < 0.1) {
      setTime(0.1)
    } else if (time > 5) {
      setTime(5)
    }
  }

  const checkData = () => {
    props.dataParams(time, countNumber, name)
  }

  return (
    <div className="blockParameters">
      <FormGroup className="formGroup">
        <h3>Введите параметры для начала игры</h3>
        <TextField
          id="outlined-helperText"
          label="Вводите текст"
          defaultValue={name}
          helperText="Введите ваше имя"
          variant="outlined"
          onChange={handleTextField}
        />
        <Typography id="input-slider" gutterBottom>
          Укажите скорость воспроизведения картинок
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TimerIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof time === 'number' ? time : 1}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              max={5}
              min={0.1}
              step={0.1}
            />
          </Grid>
          <Grid item>
            м
          </Grid>
        </Grid>
        {/* <Typography id="input-select" gutterBottom>
          Укажите скорость воспроизведения картинок
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>  */}
        <Button variant="outlined" color="primary" onClick={checkData}>
          НАЧАТЬ ИГРУ
        </Button>
      </FormGroup>
    </div>
  )
}

export default BlockParameters
