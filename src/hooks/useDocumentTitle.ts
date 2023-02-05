import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

function useDocumentTitle(title: string): void {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title
  }, [title])
}

export default useDocumentTitle

/*
  ℹ️ Usage Example
  import useDocumentTitle from '@/hooks/useDocumentTitle'
  ...
  export default functiino Component( {
    useDocumentTitle('Jinju')
  })
  ...
 */
