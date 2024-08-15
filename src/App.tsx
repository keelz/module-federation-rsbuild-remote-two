import { useSelector } from 'react-redux';
import './App.css';
import Button from './Button';
import { RootState } from './store';

const App = () => {
  const c = useSelector((state: RootState) => state.remote_two.counter.value);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <p>{c}</p>
      <Button />
    </div>
  );
};

export default App;
