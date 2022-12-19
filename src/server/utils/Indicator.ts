// ✨ SSR 판단
export const isSSR = typeof process === 'undefined'

// ✨ CSR 판단
export const isCSR = typeof process !== 'undefined'
