import { isCSR } from '@/utils/Indicator'
import { useState } from 'react'
import { useEventListener, useIsomorphicLayoutEffect } from './index'

function useScreen() {
  const getScreen = () => {
    if (isCSR && window.screen) {
      return window.screen
    }
    return undefined
  }

  const [screen, setScreen] = useState<Screen | undefined>(getScreen())

  function handleSize() {
    setScreen(getScreen())
  }

  useEventListener('resize', handleSize)

  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  return screen
}

export default useScreen

/*
  ℹ️ Usage Example
  import useScreen from '@/hooks/useScreen'
  ...
  const screen = useScreen()
  ...
  {width : screen?.width}
  ...
 */
