import { useEffect, useState } from 'react'

type Dimensions = {
  width: number | undefined
  height: number | undefined
}

const useWindowDimensions = (): Dimensions => {
  const [windowDimensions, setWindowDimensions] = useState<Dimensions>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions

/*
  ℹ️ Usage Example
  import useWindowDimension from '@/hooks/useWindowDimension'
  const { width, height } = useWindowDimensions();
 */
