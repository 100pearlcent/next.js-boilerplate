// ✨ 1,100 -> 1k
export const numberFormatter = (n: number) => {
  if (n < 1e3) return n
  if (n >= 1e3) return +(n / 1e3).toFixed(1) + 'k'
}

// ✨ 10000 -> 10,000
export const moneyFormatter = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
