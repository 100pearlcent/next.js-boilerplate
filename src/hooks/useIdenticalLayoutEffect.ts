import { isSSR } from '@/utils/Indicator'
import { useEffect, useLayoutEffect } from 'react'

const useIdenticalLayoutEffect = isSSR ? useEffect : useLayoutEffect

export default useIdenticalLayoutEffect

/*
  ℹ️ Usage Example
  import useIdenticalLayoutEffect from '@/hooks/useIdenticalLayoutEffect'
  ...
  useIdenticalLayoutEffect(() => {
    ...
  }, [])
  ...
 */
