import React from 'react'
import Grid from '@material-ui/core/Grid'
import './BlockResult.css'



const BlockResult = (str) => {
  return (
    <div className="blockResult" >
      <Grid className="results" container justify="center">
      <h3>Поздравляем!</h3>
        <Grid container alignItems="center"  justify="center" item xs={12}>
          <input size="5" type="text" readonly value={str.test.join(' из ')}/>
        </Grid>
      </Grid>
    </div>

  )
}

export default BlockResult
