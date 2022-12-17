import { Dispatch, SetStateAction, useCallback, useState } from 'react'

function useToggle(
  initialValue?: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!initialValue)
  const toggle = useCallback(() => setValue((x) => !x), [])
  return [value, toggle, setValue]
}

export default useToggle

/*
  ℹ️ Usage Example
  import useScreen from '@/hooks/useToggle'
  ...
  const [value, toggle, setValue] = useToggle()
  ...
  - In case of using setValue
  const customToggle = () => setValue((x: boolean) => !x)
  ...
  <button onClick={toggle}>Test</button>
  <button onClick={customToggle}>Test2</button>
  ...
 */
