import { useState, useCallback } from 'react';

/* eslint-disable-next-line */
export interface useCounterOptions {}

export function useCounter(options?: useCounterOptions) {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: useCallback(() => setCount((x) => x + 1), []),
    reset: useCallback(() => setCount(0), []),
  };
}

export default useCounter;
