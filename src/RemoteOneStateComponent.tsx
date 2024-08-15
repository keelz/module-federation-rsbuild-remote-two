import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

export default function() {
  const remoteOneCount = useSelector((state: RemoteOne.State) => state.remote_one.counter.value);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}><p>Remote One: {remoteOneCount}</p></Grid>
    </Grid>
  );
}
