// ✨ SSR 판단
export const isSSR = typeof window === 'undefined'

// ✨ DOM 판단
export const isDOM =
  !isSSR && window.document && window.document.documentElement
