import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

export default function() {
  const remoteOneCount = useSelector((state: RemoteOne.State) => state.remote_one.counter.value);
  return (
    <p>Remote One: {remoteOneCount}</p>
  );
}
