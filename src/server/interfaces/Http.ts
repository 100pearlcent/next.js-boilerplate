export interface HttpResponse<T = unknown, E = string[]> {
  code: number
  message?: string
  payload?: T
  errors?: E
}
