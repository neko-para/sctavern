import { Prophesy } from './types'

export type ProphesyKey =
  | '混沌洪流'
  | '无限融合'
  | '狂热冲锋'
  | '能量提速'
  | '自动装填'
  | '紧急征召'
  | '收割行动'
  | '强化药剂'
  | '地下交易'
  | '补给空投'
  | '挖宝奇兵'
  | '升变'
  | '黄金矿工'
  | '能量扩散'
  | '人海战术'
  | '时间停止'
  | '暗影刷新'
  | '过量补给'
  | '终极发现'
  | '精英学院'
  | '强化升级'
  | '水晶聚能'
  | '研发计划'
  | '基因改造'
  | '净化数据网'
  | '机械感染'
  | '虚空风暴'
  | '能量预兆'
  | '鲜血仪式'
  | '灵能特训'
  | '作战资源方案'
  | '达拉姆的荣耀'
  | '废弃试验品'
  | '战术装备'
  | '死亡阴影'
  | '相位提速'
  | '点石成金'

export const AllProphesy: ProphesyKey[] = [
  '混沌洪流',
  '无限融合',
  '狂热冲锋',
  '能量提速',
  '自动装填',
  '紧急征召',
  '收割行动',
  '强化药剂',
  '地下交易',
  '补给空投',
  '挖宝奇兵',
  '升变',
  '黄金矿工',
  '能量扩散',
  '人海战术',
  '时间停止',
  '暗影刷新',
  '过量补给',
  '终极发现',
  '精英学院',
  '强化升级',
  '水晶聚能',
  '研发计划',
  '基因改造',
  '净化数据网',
  '机械感染',
  '虚空风暴',
  '能量预兆',
  '鲜血仪式',
  '灵能特训',
  '作战资源方案',
  '达拉姆的荣耀',
  '废弃试验品',
  '战术装备',
  '死亡阴影',
  '相位提速',
  '点石成金',
]

export const ProphesyData: {
  [key in ProphesyKey]: Prophesy & {
    name: key
  }
} = {
  混沌洪流: {
    name: '混沌洪流',
    pinyin: 'hdhl',
    type: '执政官',
    desc: '融合卡牌后获得所有单位的幻象',
  },
  无限融合: {
    name: '无限融合',
    pinyin: 'wxrh',
    type: '执政官',
    desc: '技能不再限制使用次数, 融合完成后获得3晶体矿',
  },
  狂热冲锋: {
    name: '狂热冲锋',
    pinyin: 'krcf',
    type: '狂热者',
    desc: '立即提升酒馆等级至4',
  },
  能量提速: {
    name: '能量提速',
    pinyin: 'nlts',
    type: '狂热者',
    desc: '每拥有1水晶塔, 战斗开始时所有单位额外获得2%星空加速',
  },
  自动装填: {
    name: '自动装填',
    pinyin: 'zdzt',
    type: '陆战队员',
    desc: '技能不再限制使用次数',
  },
  紧急征召: {
    name: '紧急征召',
    pinyin: 'jjzz',
    type: '陆战队员',
    desc: '技能会获得两张低于酒馆等级1级的卡牌',
  },
  收割行动: {
    name: '收割行动',
    pinyin: 'sgxd',
    type: '收割者',
    desc: '定点部署卡牌现在只需要1晶体矿',
  },
  强化药剂: {
    name: '强化药剂',
    pinyin: 'qhyj',
    type: '收割者',
    desc: '每次战斗胜利时, 所有生物单位获得12%攻速提升(可以叠加)',
  },
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
  过量补给: {
    name: '过量补给',
    pinyin: 'glbj',
    type: 1,
    desc: '获得随机晶体矿补给(最多20)',
  },
  终极发现: {
    name: '终极发现',
    pinyin: 'zjfx',
    type: 1,
    desc: '发现一张6星卡牌',
  },
  精英学院: {
    name: '精英学院',
    pinyin: 'jyxy',
    type: 1,
    desc: '每回合结束时, 将场上所有单位精英化',
  },
  强化升级: {
    name: '强化升级',
    pinyin: 'qhsj',
    type: 1,
    desc: '立即升级酒馆等级至6',
  },
  水晶聚能: {
    name: '水晶聚能',
    pinyin: 'sjjn',
    type: 1,
    desc: '本局游戏中, 若出售卡牌内拥有水晶塔或虚空水晶塔, 额外获得1晶体矿(无法叠加)',
    unique: true,
  },
  研发计划: {
    name: '研发计划',
    pinyin: 'yfjh',
    type: 1,
    desc: '本局游戏中, 每进场4张卡牌, 发现一张人族卡牌(无法叠加)',
    unique: true,
  },
  基因改造: {
    name: '基因改造',
    pinyin: 'jygz',
    type: 1,
    desc: '本局游戏中, 虫卵牌孵化时额外获得6晶体矿(无法叠加)',
    unique: true,
  },
  净化数据网: {
    name: '净化数据网',
    pinyin: 'jhsjw',
    type: 1,
    desc: '下回合开始时, 将7号位非金色卡牌变为金色并获得三连效果',
  },
  机械感染: {
    name: '机械感染',
    pinyin: 'jxgr',
    type: 1,
    desc: '机械单位可以被孵化',
  },
  虚空风暴: {
    name: '虚空风暴',
    pinyin: 'xkfb',
    type: 1,
    desc: '每刷新3次酒馆, 具有虚空投影的1-5星卡牌复制卡牌内1个随机单位(无法叠加)',
    unique: true,
  },
  能量预兆: {
    name: '能量预兆',
    pinyin: 'nlyz',
    type: 1,
    desc: '战斗阶段召唤随机单位加入战斗(无法叠加)',
    unique: true,
  },
  鲜血仪式: {
    name: '鲜血仪式',
    pinyin: 'xxys',
    type: 1,
    desc: '本回合, 购买卡牌不再消耗晶体矿, 改为消耗生命值',
  },
  灵能特训: {
    name: '灵能特训',
    pinyin: 'lntx',
    type: 2,
    desc: '每回合获得10次免费刷新(只在当前回合生效)',
  },
  作战资源方案: {
    name: '作战资源方案',
    pinyin: 'zzzyfa',
    type: 2,
    desc: '本局游戏中, 每张卡的费用都变为2晶体矿',
  },
  达拉姆的荣耀: {
    name: '达拉姆的荣耀',
    pinyin: 'dlmdry',
    type: 2,
    desc: '为所有卡牌添加2阿塔尼斯并触发2次集结',
  },
  废弃试验品: {
    name: '废弃试验品',
    pinyin: 'fqsyp',
    type: 2,
    desc: '发现两个中级预言',
  },
  战术装备: {
    name: '战术装备',
    pinyin: 'zszb',
    type: 2,
    desc: '卡牌升级上限增加3, 并为场上所有卡牌添加3个随机升级',
  },
  死亡阴影: {
    name: '死亡阴影',
    pinyin: 'swyy',
    type: 2,
    desc: '为所有卡牌添加虚空投影和虚空能量',
  },
  相位提速: {
    name: '相位提速',
    pinyin: 'xwts',
    type: 2,
    desc: '出售的卡牌每有一个单位, 当前回合战斗开始时所有单位都获得1%攻速提升(最高100%)',
  },
  点石成金: {
    name: '点石成金',
    pinyin: 'dscj',
    type: 2,
    desc: '将所有非金色卡牌变为金色, 并获得三连效果与金光闪闪升级',
  },
}
