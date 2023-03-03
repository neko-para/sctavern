import type { GameConfig } from '@sctavern/emulator'
import type { AxiosRequestConfig } from 'axios'

export function Setup(id: string, config: GameConfig): AxiosRequestConfig<any> {
  return {
    url: '/api/setup',
    method: 'POST',
    data: {
      id,
      config,
    },
  }
}

export interface SetupResponse {
  message: 'ok'
}
