import React from 'react'
import Grid from '@material-ui/core/Grid'
import './BlockResult.css'

const BlockResult = (str) => {
  return (
    <div className="BlockResult" >
      <Grid container justify="center">
        <Grid container alignItems="center"  justify="center" item xs={12}>
          <p>Результат: &nbsp;</p>
          <input size="2" type="text" readonly value={str.test.join(' и ')}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default BlockResult
