import type { AxiosRequestConfig } from 'axios'

export function Query(): AxiosRequestConfig<any> {
  return {
    url: '/api/query',
    method: 'POST',
  }
}

export interface QueryResponse {
  message: 'ok'
  ids: string[]
}
