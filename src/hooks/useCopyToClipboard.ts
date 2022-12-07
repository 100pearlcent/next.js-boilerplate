import { useState } from 'react'

type CopiedValue = string | null
type Copy = (text: string) => Promise<boolean>

function useCopyToClipboard(): [CopiedValue, Copy] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: Copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn(error)
      setCopiedText(null)
      return false
    }
  }
  return [copiedText, copy]
}

export default useCopyToClipboard

/*
  ℹ️ Usage Example
  import useCopyToClipboard from '@/hooks/useCopyToClipboard'
  ...
    const [value, copy] = useCopyToClipboard()
  ...
 */
