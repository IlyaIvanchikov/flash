import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import Input from '@material-ui/core/Input'
import TimerIcon from '@material-ui/icons/Timer'
import './BlockParameters.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  input: {
    width: 40,
  },
  button: {
    width: 140,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))
const BlockParameters = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(1)
  const [age, setAge] = React.useState('')

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChange = (event) => {
    setAge(event.target.value)
  }
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < 0.1) {
      setValue(0.1)
    } else if (value > 5) {
      setValue(5)
    }
  }
  return (
    <div className="blockParameters">
      <FormGroup className="formGroup">
        <h3>Введите параметры для начала игры</h3>
        <TextField
          id="outlined-helperText"
          label="Вводите текст"
          defaultValue="Пользователь"
          helperText="Введите ваше имя"
          variant="outlined"
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
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              max={5}
              min={0.1}
              step={0.1}
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 0.1,
                min: 0.1,
                max: 5,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
        <Typography id="input-slider" gutterBottom>
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
        </FormControl>
        <Button variant="outlined" color="primary">
  Primary
</Button>
      </FormGroup>
    </div>
  )
}

export default BlockParameters
