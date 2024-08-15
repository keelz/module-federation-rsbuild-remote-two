import { Grid } from '@mui/material';
import Button from './Button';
import RemoteOneStateComponent from './RemoteOneStateComponent';

export default function() {
  return(
    <Grid container>
      <Grid item xs={12}><h2>Remote Two</h2></Grid>
      <Grid item xs={12}>
        <Button />
      </Grid>
      <Grid item xs={12}>
        <RemoteOneStateComponent />
      </Grid>
    </Grid>
  )
}