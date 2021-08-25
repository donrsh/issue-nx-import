import { useState, useCallback } from 'react';

export function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  return {
    count,
    increment: useCallback(() => setCount((x) => x + 1), []),
    reset: useCallback(() => setCount(0), []),
  };
}

export default useCounter;
