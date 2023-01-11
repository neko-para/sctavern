import type { Upgrade } from './types'

export type UpgradeKey =
  | '反甲'
  | '力大砖飞'
  | '金光闪闪'
  | '狙击镜'
  | '重构之壳'
  | '黄金矿工'
  | '修理无人机'
  | '内在潜力'
  | '阳光滋润'
  | '吸血'
  | '顽强生命力'
  | '毒质变'
  | '电磁加速器'
  | '灼热打击'
  | '重力炸弹'
  | '刚毅护盾'
  | '缩小光束'
  | '原始尖塔'
  | '原始甲壳'
  | '原始尖刺'
  | '折跃援军'
  | '星空加速'
  | '聚能器'
  | '虚空水晶'
  | '护盾充能'
  | '献祭'
  | '轨道空降'
  | '暗影战士'
  | '完美冻结'
  | '强化药剂'
  | '合金护甲'
  | '火力压制'
  | '玻璃大炮'
  | '重型装甲'
  | '虚空能量'
  | '吞噬'
  | '狂暴'
  | '深槽脊刺'
  | '几丁质甲壳'
  | '硬化外壳'

export const AllUpgrade: UpgradeKey[] = [
  '反甲',
  '力大砖飞',
  '金光闪闪',
  '狙击镜',
  '重构之壳',
  '黄金矿工',
  '修理无人机',
  '内在潜力',
  '阳光滋润',
  '吸血',
  '顽强生命力',
  '毒质变',
  '电磁加速器',
  '灼热打击',
  '重力炸弹',
  '刚毅护盾',
  '缩小光束',
  '原始尖塔',
  '原始甲壳',
  '原始尖刺',
  '折跃援军',
  '星空加速',
  '聚能器',
  '虚空水晶',
  '护盾充能',
  '献祭',
  '轨道空降',
  '暗影战士',
  '完美冻结',
  '强化药剂',
  '合金护甲',
  '火力压制',
  '玻璃大炮',
  '重型装甲',
  '虚空能量',
  '吞噬',
  '狂暴',
  '深槽脊刺',
  '几丁质甲壳',
  '硬化外壳',
]

export const UpgradeData: Record<UpgradeKey, Upgrade> = {
  反甲: {
    name: '反甲',
    pinyin: 'fj',
    override: true,
    category: 'combine',
  },
  力大砖飞: {
    name: '力大砖飞',
    pinyin: 'ldzf',
    override: false,
    category: 'combine',
  },
  金光闪闪: {
    name: '金光闪闪',
    pinyin: 'jgss',
    override: true,
    category: 'combine',
  },
  狙击镜: {
    name: '狙击镜',
    pinyin: 'jjj',
    override: false,
    category: 'combine',
  },
  重构之壳: {
    name: '重构之壳',
    pinyin: 'zgzk',
    override: false,
    category: 'combine',
  },
  黄金矿工: {
    name: '黄金矿工',
    pinyin: 'hjkg',
    override: false,
    category: 'public',
  },
  修理无人机: {
    name: '修理无人机',
    pinyin: 'xlwrj',
    override: true,
    category: 'public',
  },
  内在潜力: {
    name: '内在潜力',
    pinyin: 'nzql',
    override: true,
    category: 'public',
  },
  阳光滋润: {
    name: '阳光滋润',
    pinyin: 'ygzr',
    override: true,
    category: 'public',
  },
  吸血: {
    name: '吸血',
    pinyin: 'xx',
    override: true,
    category: 'public',
  },
  顽强生命力: {
    name: '顽强生命力',
    pinyin: 'wqsml',
    override: true,
    category: 'public',
  },
  毒质变: {
    name: '毒质变',
    pinyin: 'dzb',
    override: false,
    category: 'public',
  },
  电磁加速器: {
    name: '电磁加速器',
    pinyin: 'dcjsq',
    override: true,
    category: 'public',
  },
  灼热打击: {
    name: '灼热打击',
    pinyin: 'zrdj',
    override: true,
    category: 'public',
  },
  重力炸弹: {
    name: '重力炸弹',
    pinyin: 'zlzd',
    override: false,
    category: 'public',
  },
  刚毅护盾: {
    name: '刚毅护盾',
    pinyin: 'gyhd',
    override: false,
    category: 'public',
  },
  缩小光束: {
    name: '缩小光束',
    pinyin: 'sxgs',
    override: true,
    category: 'public',
  },
  原始尖塔: {
    name: '原始尖塔',
    pinyin: 'ysjt',
    override: true,
    category: 'primal',
  },
  原始甲壳: {
    name: '原始甲壳',
    pinyin: 'ysjq',
    override: true,
    category: 'primal',
  },
  原始尖刺: {
    name: '原始尖刺',
    pinyin: 'ysjc',
    override: true,
    category: 'primal',
  },
  折跃援军: {
    name: '折跃援军',
    pinyin: 'zyyj',
    override: true,
    category: 'protoss',
  },
  星空加速: {
    name: '星空加速',
    pinyin: 'xkjs',
    override: false,
    category: 'protoss',
  },
  聚能器: {
    name: '聚能器',
    pinyin: 'jnq',
    override: true,
    category: 'protoss',
  },
  虚空水晶: {
    name: '虚空水晶',
    pinyin: 'xksj',
    override: true,
    category: 'protoss',
  },
  护盾充能: {
    name: '护盾充能',
    pinyin: 'hdcn',
    override: false,
    category: 'protoss',
  },
  献祭: {
    name: '献祭',
    pinyin: 'xj',
    override: false,
    category: 'special',
  },
  轨道空降: {
    name: '轨道空降',
    pinyin: 'gdkj',
    override: false,
    category: 'special',
  },
  暗影战士: {
    name: '暗影战士',
    pinyin: 'ayzs',
    override: false,
    category: 'special',
  },
  完美冻结: {
    name: '完美冻结',
    pinyin: 'wmdj',
    override: true,
    category: 'special',
  },
  强化药剂: {
    name: '强化药剂',
    pinyin: 'qhyj',
    override: true,
    category: 'terran',
  },
  合金护甲: {
    name: '合金护甲',
    pinyin: 'hjhj',
    override: true,
    category: 'terran',
  },
  火力压制: {
    name: '火力压制',
    pinyin: 'hlyz',
    override: true,
    category: 'terran',
  },
  玻璃大炮: {
    name: '玻璃大炮',
    pinyin: 'bldp',
    override: true,
    category: 'terran',
  },
  重型装甲: {
    name: '重型装甲',
    pinyin: 'zxzj',
    override: true,
    category: 'terran',
  },
  虚空能量: {
    name: '虚空能量',
    pinyin: 'xknl',
    override: false,
    category: 'virtual',
  },
  吞噬: {
    name: '吞噬',
    pinyin: 'ts',
    override: true,
    category: 'zerg',
  },
  狂暴: {
    name: '狂暴',
    pinyin: 'kb',
    override: false,
    category: 'zerg',
  },
  深槽脊刺: {
    name: '深槽脊刺',
    pinyin: 'scjc',
    override: true,
    category: 'zerg',
  },
  几丁质甲壳: {
    name: '几丁质甲壳',
    pinyin: 'jdzjq',
    override: true,
    category: 'zerg',
  },
  硬化外壳: {
    name: '硬化外壳',
    pinyin: 'yhwk',
    override: true,
    category: 'zerg',
  },
}
