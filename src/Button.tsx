import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { increment } from './features/counter.slice';

export default function ButtonUsoage() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(increment());

  return (
    <Button onClick={handleClick}>increment</Button>
  );
}
