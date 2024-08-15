import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './features/counter.slice';
import { RootState } from './store';
import { RemoteOneState } from 'remote_one/state';
import RemoteOneButton from 'remote_one/button';

export default function ButtonUsoage() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(increment());
  const remoteOneCount = useSelector((state: RemoteOneState) => state.remote_one.counter.value);
  const remoteTwoCount = useSelector((state: RootState) => state.remote_two.counter.value);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RemoteOneButton />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleClick}>Increment R2</Button>
      </Grid>
      <Grid item xs={12}>
        <p>R1 Counter: {remoteOneCount}</p>
        <p>R2 Counter: {remoteTwoCount}</p>
      </Grid>
    </Grid>
  );
}
