import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import Title from 'components/Title';

import useConter from '@nx-try/hook/use-counter';

export function App() {
  const { count, increment, reset } = useConter();
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to shop!</h1>
      </header>
      <Title />
      <main>
        <h4>Count: {count}</h4>
        <button onClick={increment}>increment</button>
        <button onClick={reset}>reset</button>
      </main>
    </div>
  );
}

export default App;
