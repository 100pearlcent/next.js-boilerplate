// ✨ 페이지의 마지막에 도달 시 true를 반환
export const scrollToBottom = () => {
  if (
    Math.ceil(window.innerHeight + window.scrollY) >=
    document.documentElement.scrollHeight
  )
    return true
}
