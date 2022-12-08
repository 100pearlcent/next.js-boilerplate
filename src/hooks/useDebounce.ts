import { useEffect, useState } from 'react'

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce

/*
  ℹ️ Usage Example
  import useDebounce from '@/hooks/useDebounce'
  ...
  const DEBOUNCE_DELAY = 500;
  const debouncedValue = useDebounce<string>(value, DEBOUNCE_DELAY)
  ...
 */
