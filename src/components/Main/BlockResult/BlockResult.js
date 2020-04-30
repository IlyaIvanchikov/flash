import React from 'react'
import {
  // TextField,
  // FormGroup,
  // Typography,
  // InputLabel,
  // MenuItem,
  // FormControl,
  // Select,
  // Slider,
  Input,
  Button,
  Grid,
} from '@material-ui/core'
import './BlockResult.css'



const BlockResult = () => {
  return (
    <div className="blockResult" >
      <Grid className="results" container justify="center">
      <h3>Поздравляем!</h3>
        <Grid container alignItems="center"  justify="center" item xs={12}>
        <Input
              readOnly
              value="100"
              margin="dense"
              // onChange={handleInputChange}
              // onBlur={handleBlur}
              // inputProps={{
              //   step: 0.1,
              //   min: 0.1,
              //   max: 5,
              //   type: 'number',
              //   'aria-labelledby': 'input-slider',
              // }}
            />
        </Grid>
        <Grid container justify="center"  item xs={12}>
          <Button color="primary">
            НАЧАТЬ ЗАНОВО
          </Button>
        </Grid>
      </Grid>
    </div>

  )
}

export default BlockResult
