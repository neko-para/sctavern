import type { Mutation } from './types'

export type MutationKey =
  | '辅助角色-诺娃'
  | '辅助角色-星港'
  | '辅助角色-泰凯斯'
  | '地嗪外溢'
  | '作战规划'

export const AllMutation = [
  '辅助角色-诺娃',
  '辅助角色-星港',
  '辅助角色-泰凯斯',
  '地嗪外溢',
  '作战规划',
]

export const MutationData: Record<MutationKey, Mutation> = {
  '辅助角色-诺娃': {
    pinyin: 'fzjs-nw',
    prevent: '诺娃',
  },
  '辅助角色-星港': {
    pinyin: 'fzjs-xg',
    prevent: '星港',
  },
  '辅助角色-泰凯斯': {
    pinyin: 'fzjs-tks',
    prevent: '泰凯斯',
  },
  地嗪外溢: {
    pinyin: 'dqwy',
    prevent: '斯台特曼',
  },
  作战规划: {
    pinyin: 'zzgh',
  },
}
