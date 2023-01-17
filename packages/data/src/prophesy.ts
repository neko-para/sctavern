import { Prophesy } from './types'

export type ProphesyKey =
  | '地下交易'
  | '补给空投'
  | '挖宝奇兵'
  | '升变'
  | '黄金矿工'
  | '能量扩散'
  | '人海战术'
  | '时间停止'
  | '暗影刷新'

export const AllProphesy: ProphesyKey[] = [
  '地下交易',
  '补给空投',
  '挖宝奇兵',
  '升变',
  '黄金矿工',
  '能量扩散',
  '人海战术',
  '时间停止',
  '暗影刷新',
]

export const ProphesyData: Record<ProphesyKey, Prophesy> = {
  地下交易: {
    name: '地下交易',
    pinyin: 'dxjy',
    type: 0,
    desc: '获得3晶体矿',
  },
  补给空投: {
    name: '补给空投',
    pinyin: 'bjkt',
    type: 0,
    desc: '随机获得一张当前酒馆等级的卡牌',
  },
  挖宝奇兵: {
    name: '挖宝奇兵',
    pinyin: 'wbqb',
    type: 0,
    desc: '获得卡牌挖宝奇兵',
  },
  升变: {
    name: '升变',
    pinyin: 'sb',
    type: 0,
    desc: '降低酒馆升级费用4',
  },
  黄金矿工: {
    name: '黄金矿工',
    pinyin: 'hjkg',
    type: 0,
    desc: '为随机卡牌添加黄金矿工',
  },
  能量扩散: {
    name: '能量扩散',
    pinyin: 'nlks',
    type: 0,
    desc: '获得10次免费刷新(只在本回合生效)',
  },
  人海战术: {
    name: '人海战术',
    pinyin: 'rhzs',
    type: 0,
    desc: '发现一张1星卡牌',
  },
  时间停止: {
    name: '时间停止',
    pinyin: 'sjzt',
    type: 0,
    desc: '下次战斗开始时, 所有敌对单位冻结在时空中, 无法移动或攻击, 持续15秒',
  },
  暗影刷新: {
    name: '暗影刷新',
    pinyin: 'aysx',
    type: 0,
    desc: '刷新酒馆, 陈列当前酒馆等级+1星级的卡牌',
  },
}
