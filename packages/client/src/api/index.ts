import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { Setup, type SetupResponse } from './setup'
import { Query, type QueryResponse } from './query'

type ParamOf<T> = T extends (...param: [...infer U]) => any ? U : never

const config = {
  host: `http://${window.location.host}`,
}

const $Api = {
  Setup,
  Query,
} as const

type $ApiRes = {
  Setup: SetupResponse
  Query: QueryResponse
}

function wrap<T extends unknown[]>(
  func: (...arg: [...T]) => AxiosRequestConfig<any>
) {
  return function (...param: [...T]) {
    return axios({
      ...config,
      ...func(...param),
    })
  }
}

export const Api = new Proxy($Api, {
  get(target, key: keyof typeof $Api) {
    return wrap(target[key])
  },
}) as {
  [key in keyof typeof $Api]: (
    ...param: ParamOf<(typeof $Api)[key]>
  ) => Promise<AxiosResponse<$ApiRes[key]>>
}
