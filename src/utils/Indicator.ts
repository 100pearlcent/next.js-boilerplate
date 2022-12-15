// ✨ SSR 판단
export const isSSR = typeof window === 'undefined'

// ✨ CSR 판단
export const isCSR = typeof window !== 'undefined'

// ✨ DOM 판단
export const isDOM = isCSR && window.document && window.document.documentElement
