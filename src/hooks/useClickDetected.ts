type Handler = (event: MouseEvent) => void

function useClickDetected(handler: Handler) {
  addEventListener('click', (event) => {
    handler(event)
  })
}

export default useClickDetected

/*
  ℹ️ Usage Example
  import useClickDetected from '@/hooks/useClickDetected'
  ...
  const [count, setCount] = useState(0)

  useClickDetected(() => {
    setCount(prev => prev + 1)
  })
  ...
 */
