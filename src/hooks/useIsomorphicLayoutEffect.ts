import { isSSR } from '@/utils/Indicator'
import { useEffect, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect = isSSR ? useEffect : useLayoutEffect

export default useIsomorphicLayoutEffect

/*
  ℹ️ Usage Example
  import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
  ...
  useIsomorphicLayoutEffect(() => {
    ...
  }, [])
  ...
 */
