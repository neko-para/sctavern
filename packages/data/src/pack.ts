import { CardKey } from './card'
import { Pack } from './types'

export const CardPack: Record<Pack, CardKey[]> = {
  核心: [
    // 中立
    '原始蟑螂',
    '不死队',
    '紧急部署',
    '原始刺蛇',
    '原始异龙',
    '虚空大军',
    '鲜血猎手',
    '暴掠龙',
    '适者生存',
    '毁灭者',
    '原始点火虫',
    '原始雷兽',
    '马拉什',
    '黑暗预兆',
    '阿拉纳克',
    '天罚行者',
    '德哈卡',
    '凯瑞甘',
    '虚空构造体',

    // 神族
    '折跃援军',
    '发电站',
    '供能中心',
    '龙骑兵团',
    '万叉奔腾',
    '折跃信标',
    '艾尔之刃',
    '折跃部署',
    '暗影卫队',
    '重回战场',
    '折跃攻势',
    '净化者军团',
    '凯拉克斯',
    '虚空舰队',
    '势不可挡',
    '黄金舰队',
    '尤尔兰',
    '光复艾尔',
    '菲尼克斯',
    '净化一切',
    '阿尔达瑞斯',
    '阿塔尼斯',

    // 人族
    '死神火车',
    '好兄弟',
    '挖宝奇兵',
    '实验室安保',
    '征兵令',
    '恶火小队',
    '空投地雷',
    '步兵连队',
    '飙车流',
    '科考小队',
    '陆军学院',
    '空军学院',
    '交叉火力',
    '枪兵坦克',
    '斯台特曼',
    '护航中队',
    '泰凯斯',
    '外籍军团',
    '钢铁洪流',
    '游骑兵',
    '沃菲尔德',
    '帝国舰队',

    // 虫族
    '虫群先锋',
    '蟑螂小队',
    '屠猎者',
    '埋地刺蛇',
    '变异军团',
    '孵化蟑螂',
    '爆虫滚滚',
    '飞龙骑脸',
    '凶残巨兽',
    '注卵虫后',
    '孵化所',
    '地底伏击',
    '孵化刺蛇',
    '感染深渊',
    '腐化大龙',
    '空中管制',
    '虫群大军',
    '终极进化',
    '凶猛巨兽',
    '扎加拉',
    '斯托科夫',
  ],
  核心衍生: ['虫卵', '刀锋女王', '黄金矿工'],
  母舰核心衍生: ['母舰核心'],
  科学球衍生: ['观察样本'],
  要塞衍生: [
    '毒气炮塔',
    '凯达琳巨石',
    '岗哨机枪',
    '行星要塞',
    '星门',
    '自动机炮',
    '作战中心',
    '导弹基地',
    '粒子光炮',
    '再生钢',
  ],
  泰凯斯衍生: ['不法之徒'],
  诺娃衍生: ['生化实验室', '紧急回收', '星灵科技', '尖端科技', '超负荷'],
  思旺衍生: ['机械工厂'],
  特典: ['我叫小明', '豆浆油条KT1', '豆浆油条', '战斗号角', '酒馆后勤处'],
  天空之怒: ['黄昏之翼', '净化之光', '守卫巢穴', '死亡舰队'],
  并肩作战: ['艾尔游骑兵', '生物质发电', '生化危机', '虚空裂痕'],
  拉克希尔: ['死亡之翼', '虚空援军', '深渊行者', '黑暗祭坛'],
  短兵相接: ['帝国敢死队', '黑暗教长', '雷兽窟', '混合体巨兽'],
  快速启动: ['以火治火', '六脉神剑', '优质基因', '埃蒙仆从'],
  独辟蹊径: ['复制中心', '晋升仪式', '基因突变', '风暴英雄'],
  军备竞赛: ['帝国精锐', '英雄叉', '机械感染', '死亡之握'],
  不法之徒: [],
  幽灵衍生: ['幽灵报道'],
}

export const ExtPack: Pack[] = [
  '天空之怒',
  '并肩作战',
  '拉克希尔',
  '短兵相接',
  '快速启动',
  '独辟蹊径',
  '军备竞赛',
  '不法之徒',
]

export const PresetPoolPack: Pack[] = [
  '核心',
  '特典',
  '天空之怒',
  '并肩作战',
  '拉克希尔',
  '短兵相接',
  '快速启动',
  '独辟蹊径',
  '军备竞赛',
  '不法之徒',
]

export const PvpPresetActivePack: Pack[] = [
  '核心',
  '母舰核心衍生',
  '科学球衍生',
  '要塞衍生',
  '泰凯斯衍生',
  '诺娃衍生',
  '思旺衍生',
  '特典',
  '天空之怒',
  '并肩作战',
  '拉克希尔',
  '短兵相接',
  '快速启动',
  '独辟蹊径',
  '军备竞赛',
  '不法之徒',
]

export const PvePresetActivePack: Pack[] = [
  '核心',
  '母舰核心衍生',
  '科学球衍生',
  '要塞衍生',
  '泰凯斯衍生',
  '诺娃衍生',
  '思旺衍生',
  '特典',
  '天空之怒',
  '并肩作战',
  '拉克希尔',
  '短兵相接',
  '快速启动',
  '独辟蹊径',
  '军备竞赛',
  '不法之徒',
  '幽灵衍生',
]
