import { Dispatch, SetStateAction, useState } from 'react'

interface ICounter {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setCount: Dispatch<SetStateAction<number>>
}

function useCounter(initialValue?: number): ICounter {
  const [count, setCount] = useState(initialValue || 0)

  const increment = () => setCount((x) => x + 1)
  const decrement = () => setCount((x) => x - 1)
  const reset = () => setCount(initialValue || 0)

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  }
}

export default useCounter

/*
  ℹ️ Usage Example
  import { useCounter } from '@/hooks/useCounter'

  export default function Component() {
    const { count, setCount, increment, decrement, reset } = useCounter(0)

    const double = () => setCount((x: number) => x * 2)
ß
    return (
        <>
            <p>You hit the button {count} time(s)</p>
            <button onClick={increment}>➕</button>
            <button onClick={decrement}>➖</button>
            <button onClick={reset}>🔄</button>
            <button onClick={double}>Make It Double</button>
        </>
    )
  }
 */
