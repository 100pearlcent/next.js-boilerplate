import { NextApiRequest, NextApiResponse } from 'next'

export interface HttpResponse<T = unknown, E = string[]> {
  code: number
  message?: string
  payload?: T
  errors?: E
}

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type MethodHandler = (req: NextApiRequest, res: NextApiResponse) => void

export type MethodModel = { [key in HttpMethods]?: MethodHandler }
