import type { Unit } from './types'

export type UnitKey =
  | '塔达林母舰'
  | '虚空裂隙'
  | '百夫长'
  | '凤凰'
  | '天霸'
  | '先锋'
  | '黑暗执政官'
  | '混合体巨兽'
  | '沃拉尊'
  | '死亡之握水晶'
  | '零件'
  | '精华'
  | '原始蟑螂'
  | '不死队'
  | '自动机炮'
  | '修理无人机'
  | '原始刺蛇'
  | '原始异龙'
  | '鲜血猎手'
  | '浩劫'
  | '暴掠龙'
  | '亚格卓拉'
  | '毁灭者'
  | '原始点火虫'
  | '原始雷兽'
  | '原始暴龙兽'
  | '马拉什'
  | '混合体毁灭者'
  | '阿拉纳克'
  | '天罚行者'
  | '德哈卡'
  | '德哈卡分身'
  | '征召兵'
  | '武装机器人'
  | '赛兰迪丝'
  | '莎拉·凯瑞甘'
  | '刀锋女王'
  | '虚空构造体'
  | '泽拉图'
  | '先知'
  | '水晶塔'
  | '虚空水晶塔'
  | '追猎者'
  | '狂热者'
  | '使徒'
  | '龙骑士'
  | '机械哨兵'
  | '不朽者'
  | '高阶圣堂武士'
  | '折跃棱镜'
  | '黑暗圣堂武士'
  | '掠夺者'
  | '巨像'
  | '凯拉克斯'
  | '虚空辉光舰'
  | '执政官'
  | '航母'
  | '风暴战舰'
  | '侦察机'
  | '尤尔兰'
  | '莫汗达尔'
  | '泰坦棱镜'
  | '泰坦棱镜<已收起>'
  | '菲尼克斯'
  | '旋风狂热者'
  | '科罗拉里昂'
  | '卡尔达利斯'
  | '仲裁者'
  | '英雄不朽者'
  | '阿塔尼斯'
  | '激励者'
  | '追猎者(精英)'
  | '狂热者(精英)'
  | '旋风狂热者(精英)'
  | '使徒(精英)'
  | '黑暗圣堂武士(精英)'
  | '巨像(精英)'
  | '虚空辉光舰(精英)'
  | '执政官(精英)'
  | '女妖'
  | '诺娃'
  | '火蝠'
  | '火蝠(精英)'
  | '幽魂'
  | '恶蝠游骑兵'
  | '劫掠者(皇家卫队)'
  | '反应堆'
  | '科技实验室'
  | '高级科技实验室'
  | '收割者'
  | '恶蝠'
  | '恶火'
  | '陆战队员'
  | '响尾蛇战车'
  | '医疗兵'
  | '攻城坦克'
  | '歌利亚'
  | '寡妇雷'
  | '劫掠者'
  | '医疗运输机'
  | '秃鹫'
  | '飓风'
  | '铁鸦'
  | '战狼'
  | '维京战机'
  | '维京战机<机甲>'
  | '解放者'
  | '斯台特曼'
  | '思旺'
  | '热辣贝蒂'
  | '怨灵战机'
  | '黄昏之翼'
  | '泰凯斯'
  | '牛头人陆战队员'
  | '鱼人陆战队员'
  | '雷神'
  | '雷诺(指挥官)'
  | '雷诺(狙击手)'
  | '沃菲尔德将军'
  | '帝盾卫兵'
  | '战列巡航舰'
  | '陆战队员(精英)'
  | '劫掠者(精英)'
  | '歌利亚(精英)'
  | '战狼(精英)'
  | '维京战机(精英)'
  | '维京战机<机甲>(精英)'
  | '攻城坦克(精英)'
  | '幼雷兽'
  | '被感染的女妖'
  | '末日巨兽'
  | '跳虫'
  | '爆虫'
  | '蟑螂'
  | '破坏者'
  | '刺蛇'
  | '被感染的陆战队员'
  | '异龙'
  | '雷兽'
  | '虫后'
  | '菌毯肿瘤'
  | '守卫'
  | '潜伏者'
  | '感染者'
  | '畸变体'
  | '腐化者'
  | '巢虫领主'
  | '飞蛇'
  | '爆蚊'
  | '莽兽'
  | '利维坦'
  | '扎加拉'
  | '斯托科夫'
  | '跳虫(精英)'
  | '爆虫(精英)'
  | '蟑螂(精英)'
  | '破坏者(精英)'
  | '刺蛇(精英)'
  | '异龙(精英)'
  | '雷兽(精英)'
  | '母舰核心'
  | '母舰'
  | '毒气炮塔'
  | '凯达琳巨石'
  | '岗哨机枪'
  | '行星要塞'
  | '星门'
  | '作战指挥中心'
  | '风暴对地导弹塔'
  | '粒子光炮'
  | '奥丁'
  | '休伯利安号'
  | '维京战机(皇家卫队)'
  | '维京战机<机甲>(皇家卫队)'
  | '攻城坦克(皇家卫队)'
  | '雷神(皇家卫队)'
  | '战列巡航舰(皇家卫队)'
  | '混合体掠夺者'
  | '混合体天罚者'
  | '混合体支配者'
  | '混合体实验体'
  | '原始穿刺者'
  | '原始守卫'
  | '毒裂兽'
  | '王兽'

export const AllUnit = [
  '塔达林母舰',
  '虚空裂隙',
  '百夫长',
  '凤凰',
  '天霸',
  '先锋',
  '黑暗执政官',
  '混合体巨兽',
  '沃拉尊',
  '死亡之握水晶',
  '零件',
  '精华',
  '原始蟑螂',
  '不死队',
  '自动机炮',
  '修理无人机',
  '原始刺蛇',
  '原始异龙',
  '鲜血猎手',
  '浩劫',
  '暴掠龙',
  '亚格卓拉',
  '毁灭者',
  '原始点火虫',
  '原始雷兽',
  '原始暴龙兽',
  '马拉什',
  '混合体毁灭者',
  '阿拉纳克',
  '天罚行者',
  '德哈卡',
  '德哈卡分身',
  '征召兵',
  '武装机器人',
  '赛兰迪丝',
  '莎拉·凯瑞甘',
  '刀锋女王',
  '虚空构造体',
  '泽拉图',
  '先知',
  '水晶塔',
  '虚空水晶塔',
  '追猎者',
  '狂热者',
  '使徒',
  '龙骑士',
  '机械哨兵',
  '不朽者',
  '高阶圣堂武士',
  '折跃棱镜',
  '黑暗圣堂武士',
  '掠夺者',
  '巨像',
  '凯拉克斯',
  '虚空辉光舰',
  '执政官',
  '航母',
  '风暴战舰',
  '侦察机',
  '尤尔兰',
  '莫汗达尔',
  '泰坦棱镜',
  '泰坦棱镜<已收起>',
  '菲尼克斯',
  '旋风狂热者',
  '科罗拉里昂',
  '卡尔达利斯',
  '仲裁者',
  '英雄不朽者',
  '阿塔尼斯',
  '激励者',
  '追猎者(精英)',
  '狂热者(精英)',
  '旋风狂热者(精英)',
  '使徒(精英)',
  '黑暗圣堂武士(精英)',
  '巨像(精英)',
  '虚空辉光舰(精英)',
  '执政官(精英)',
  '女妖',
  '诺娃',
  '火蝠',
  '火蝠(精英)',
  '幽魂',
  '恶蝠游骑兵',
  '劫掠者(皇家卫队)',
  '反应堆',
  '科技实验室',
  '高级科技实验室',
  '收割者',
  '恶蝠',
  '恶火',
  '陆战队员',
  '响尾蛇战车',
  '医疗兵',
  '攻城坦克',
  '歌利亚',
  '寡妇雷',
  '劫掠者',
  '医疗运输机',
  '秃鹫',
  '飓风',
  '铁鸦',
  '战狼',
  '维京战机',
  '维京战机<机甲>',
  '解放者',
  '斯台特曼',
  '思旺',
  '热辣贝蒂',
  '怨灵战机',
  '黄昏之翼',
  '泰凯斯',
  '牛头人陆战队员',
  '鱼人陆战队员',
  '雷神',
  '雷诺(指挥官)',
  '雷诺(狙击手)',
  '沃菲尔德将军',
  '帝盾卫兵',
  '战列巡航舰',
  '陆战队员(精英)',
  '劫掠者(精英)',
  '歌利亚(精英)',
  '战狼(精英)',
  '维京战机(精英)',
  '维京战机<机甲>(精英)',
  '攻城坦克(精英)',
  '幼雷兽',
  '被感染的女妖',
  '末日巨兽',
  '跳虫',
  '爆虫',
  '蟑螂',
  '破坏者',
  '刺蛇',
  '被感染的陆战队员',
  '异龙',
  '雷兽',
  '虫后',
  '菌毯肿瘤',
  '守卫',
  '潜伏者',
  '感染者',
  '畸变体',
  '腐化者',
  '巢虫领主',
  '飞蛇',
  '爆蚊',
  '莽兽',
  '利维坦',
  '扎加拉',
  '斯托科夫',
  '跳虫(精英)',
  '爆虫(精英)',
  '蟑螂(精英)',
  '破坏者(精英)',
  '刺蛇(精英)',
  '异龙(精英)',
  '雷兽(精英)',
  '母舰核心',
  '母舰',
  '毒气炮塔',
  '凯达琳巨石',
  '岗哨机枪',
  '行星要塞',
  '星门',
  '作战指挥中心',
  '风暴对地导弹塔',
  '粒子光炮',
  '奥丁',
  '休伯利安号',
  '维京战机(皇家卫队)',
  '维京战机<机甲>(皇家卫队)',
  '攻城坦克(皇家卫队)',
  '雷神(皇家卫队)',
  '战列巡航舰(皇家卫队)',
  '混合体掠夺者',
  '混合体天罚者',
  '混合体支配者',
  '混合体实验体',
  '原始穿刺者',
  '原始守卫',
  '毒裂兽',
  '王兽',
]

export const UnitData: Record<UnitKey, Unit> = {
  塔达林母舰: {
    pinyin: 'tdlmj',
    race: 'N',
    value: 600,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      psionic: true,
      massive: true,
      heroic: true,
      air: true,
    },
    health: 800,
    shield: 600,
  },
  虚空裂隙: {
    pinyin: 'xklx',
    race: 'N',
    value: 0,
    type: 'special structure',
    tag: {},
    health: 1500,
  },
  百夫长: {
    pinyin: 'bfz',
    race: 'N',
    value: 200,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 130,
    shield: 100,
  },
  凤凰: {
    pinyin: 'fh',
    race: 'N',
    value: 250,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
      air: true,
    },
    health: 120,
    shield: 60,
  },
  天霸: {
    pinyin: 'tb',
    race: 'N',
    value: 600,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
      air: true,
    },
    health: 300,
    shield: 150,
  },
  先锋: {
    pinyin: 'xf',
    race: 'N',
    value: 375,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 200,
    shield: 100,
  },
  黑暗执政官: {
    pinyin: 'hazzg',
    race: 'N',
    value: 450,
    type: 'normal',
    tag: {
      psionic: true,
      massive: true,
    },
    health: 10,
    shield: 350,
  },
  混合体巨兽: {
    pinyin: 'hhtjs',
    race: 'N',
    value: 1200,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
      heroic: true,
    },
    health: 1000,
  },
  沃拉尊: {
    pinyin: 'wlz',
    race: 'N',
    value: 0,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      psionic: true,
      heroic: true,
    },
    health: 300,
    shield: 300,
  },
  死亡之握水晶: {
    pinyin: 'swzwsj',
    race: 'N',
    value: 1000,
    type: 'normal',
    tag: {
      heroic: true,
    },
    health: 250,
    shield: 250,
  },
  零件: {
    pinyin: 'lj',
    race: 'N',
    value: 0,
    type: 'normal',
    tag: {},
    health: 0,
  },
  精华: {
    pinyin: 'jh',
    race: 'N',
    value: 0,
    type: 'special unit',
    tag: {},
    health: 0,
  },
  原始蟑螂: {
    pinyin: 'yszl',
    race: 'N',
    value: 100,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 120,
  },
  不死队: {
    pinyin: 'bsd',
    race: 'N',
    value: 100,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 100,
    shield: 50,
  },
  自动机炮: {
    pinyin: 'zdjp',
    race: 'N',
    value: 200,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      structure: true,
    },
    health: 250,
  },
  修理无人机: {
    pinyin: 'xlwrj',
    race: 'N',
    value: 0,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
      heroic: true,
      air: true,
    },
    health: 50,
  },
  原始刺蛇: {
    pinyin: 'yscs',
    race: 'N',
    value: 150,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 80,
  },
  原始异龙: {
    pinyin: 'ysyl',
    race: 'N',
    value: 250,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      air: true,
    },
    health: 175,
  },
  鲜血猎手: {
    pinyin: 'xxls',
    race: 'N',
    value: 125,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      psionic: true,
    },
    health: 80,
    shield: 40,
  },
  浩劫: {
    pinyin: 'hj',
    race: 'N',
    value: 200,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
    },
    health: 60,
    shield: 40,
  },
  暴掠龙: {
    pinyin: 'bll',
    race: 'N',
    value: 200,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 200,
  },
  亚格卓拉: {
    pinyin: 'ygzl',
    race: 'N',
    value: 1000,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
      heroic: true,
    },
    health: 2000,
  },
  毁灭者: {
    pinyin: 'hmz',
    race: 'N',
    value: 400,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      air: true,
    },
    health: 150,
    shield: 100,
  },
  原始点火虫: {
    pinyin: 'ysdhc',
    race: 'N',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 300,
  },
  原始雷兽: {
    pinyin: 'ysls',
    race: 'N',
    value: 425,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
    },
    health: 300,
  },
  原始暴龙兽: {
    pinyin: 'ysbls',
    race: 'N',
    value: 600,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
      heroic: true,
    },
    health: 600,
  },
  马拉什: {
    pinyin: 'mls',
    race: 'N',
    value: 800,
    type: 'normal',
    tag: {
      biological: true,
      psionic: true,
      heroic: true,
    },
    health: 100,
    shield: 300,
  },
  混合体毁灭者: {
    pinyin: 'hhthmz',
    race: 'N',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      heroic: true,
    },
    health: 200,
    shield: 200,
  },
  阿拉纳克: {
    pinyin: 'alnk',
    race: 'N',
    value: 1500,
    type: 'normal',
    tag: {
      biological: true,
      psionic: true,
      heroic: true,
    },
    health: 300,
    shield: 350,
  },
  天罚行者: {
    pinyin: 'tfxz',
    race: 'N',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
    },
    health: 200,
    shield: 150,
  },
  德哈卡: {
    pinyin: 'dhk',
    race: 'N',
    value: 750,
    type: 'normal',
    tag: {
      biological: true,
      heroic: true,
    },
    health: 650,
  },
  德哈卡分身: {
    pinyin: 'dhkfs',
    race: 'N',
    value: 300,
    type: 'normal',
    tag: {
      biological: true,
    },
    health: 250,
  },
  征召兵: {
    pinyin: 'zzb',
    race: 'N',
    value: 40,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 35,
  },
  武装机器人: {
    pinyin: 'wzjqr',
    race: 'N',
    value: 1000,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      heroic: true,
    },
    health: 15000,
  },
  赛兰迪丝: {
    pinyin: 'slds',
    race: 'N',
    value: 1000,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
      heroic: true,
      air: true,
    },
    health: 800,
    shield: 500,
  },
  '莎拉·凯瑞甘': {
    pinyin: 'sl·krg',
    race: 'N',
    value: 50,
    type: 'normal',
    tag: {
      biological: true,
      psionic: true,
      heroic: true,
    },
    health: 1,
  },
  刀锋女王: {
    pinyin: 'dfnw',
    race: 'N',
    value: 100,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      psionic: true,
      heroic: true,
    },
    health: 1,
  },
  虚空构造体: {
    pinyin: 'xkgzt',
    race: 'N',
    value: 3000,
    type: 'normal',
    tag: {
      armored: true,
      massive: true,
      heroic: true,
    },
    health: 2500,
  },
  泽拉图: {
    pinyin: 'zlt',
    race: 'P',
    value: 1000,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      psionic: true,
      heroic: true,
    },
    health: 400,
    shield: 300,
  },
  先知: {
    pinyin: 'xz',
    race: 'P',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      psionic: true,
      air: true,
    },
    health: 100,
    shield: 60,
  },
  水晶塔: {
    pinyin: 'sjt',
    race: 'P',
    value: 0,
    type: 'special structure',
    tag: {},
    health: 0,
  },
  虚空水晶塔: {
    pinyin: 'xksjt',
    race: 'P',
    value: 0,
    type: 'special structure',
    tag: {},
    health: 0,
  },
  追猎者: {
    pinyin: 'zlz',
    race: 'P',
    value: 175,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 80,
    shield: 80,
  },
  狂热者: {
    pinyin: 'krz',
    race: 'P',
    value: 100,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 100,
    shield: 50,
  },
  使徒: {
    pinyin: 'st',
    race: 'P',
    value: 150,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 70,
    shield: 70,
  },
  龙骑士: {
    pinyin: 'lqs',
    race: 'P',
    value: 175,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 120,
    shield: 80,
  },
  机械哨兵: {
    pinyin: 'jxsb',
    race: 'P',
    value: 150,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
      psionic: true,
    },
    health: 40,
    shield: 40,
  },
  不朽者: {
    pinyin: 'bxz',
    race: 'P',
    value: 375,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 200,
    shield: 100,
  },
  高阶圣堂武士: {
    pinyin: 'gjstws',
    race: 'P',
    value: 200,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      psionic: true,
    },
    health: 40,
    shield: 40,
  },
  折跃棱镜: {
    pinyin: 'zylj',
    race: 'P',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      psionic: true,
      air: true,
    },
    health: 80,
    shield: 100,
  },
  黑暗圣堂武士: {
    pinyin: 'hastws',
    race: 'P',
    value: 250,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      psionic: true,
    },
    health: 40,
    shield: 60,
  },
  掠夺者: {
    pinyin: 'ldz',
    race: 'P',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
    },
    health: 200,
    shield: 150,
  },
  巨像: {
    pinyin: 'jx',
    race: 'P',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
    },
    health: 200,
    shield: 150,
  },
  凯拉克斯: {
    pinyin: 'klks',
    race: 'P',
    value: 600,
    type: 'normal',
    tag: {
      biological: true,
      heroic: true,
    },
    health: 200,
    shield: 200,
  },
  虚空辉光舰: {
    pinyin: 'xkhgj',
    race: 'P',
    value: 400,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      air: true,
    },
    health: 150,
    shield: 100,
  },
  执政官: {
    pinyin: 'zzg',
    race: 'P',
    value: 450,
    type: 'normal',
    tag: {
      psionic: true,
      massive: true,
    },
    health: 10,
    shield: 350,
  },
  航母: {
    pinyin: 'hm',
    race: 'P',
    value: 600,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
      air: true,
    },
    health: 300,
    shield: 150,
  },
  风暴战舰: {
    pinyin: 'fbzj',
    race: 'P',
    value: 425,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
      air: true,
    },
    health: 200,
    shield: 100,
  },
  侦察机: {
    pinyin: 'zcj',
    race: 'P',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      air: true,
    },
    health: 100,
    shield: 60,
  },
  尤尔兰: {
    pinyin: 'yel',
    race: 'P',
    value: 400,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      heroic: true,
      air: true,
    },
    health: 150,
    shield: 150,
  },
  莫汗达尔: {
    pinyin: 'mhde',
    race: 'P',
    value: 600,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      heroic: true,
      air: true,
    },
    health: 500,
    shield: 300,
  },
  泰坦棱镜: {
    pinyin: 'ttlj',
    race: 'P',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      psionic: true,
      heroic: true,
      air: true,
    },
    health: 500,
    shield: 500,
  },
  '泰坦棱镜<已收起>': {
    pinyin: 'ttlj<ysq>',
    race: 'P',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      psionic: true,
      heroic: true,
      air: true,
    },
    health: 500,
    shield: 500,
  },
  菲尼克斯: {
    pinyin: 'fnks',
    race: 'P',
    value: 1000,
    type: 'normal',
    tag: {
      mechanical: true,
      massive: true,
      heroic: true,
    },
    health: 300,
    shield: 500,
  },
  旋风狂热者: {
    pinyin: 'xfkrz',
    race: 'P',
    value: 100,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 100,
    shield: 50,
  },
  科罗拉里昂: {
    pinyin: 'kllla',
    race: 'P',
    value: 1500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
      heroic: true,
      air: true,
    },
    health: 600,
    shield: 300,
  },
  卡尔达利斯: {
    pinyin: 'kedls',
    race: 'P',
    value: 800,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
      heroic: true,
    },
    health: 400,
    shield: 200,
  },
  仲裁者: {
    pinyin: 'zcz',
    race: 'P',
    value: 1000,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      heroic: true,
      air: true,
    },
    health: 300,
    shield: 500,
  },
  英雄不朽者: {
    pinyin: 'yxbxz',
    race: 'P',
    value: 900,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      heroic: true,
    },
    health: 300,
    shield: 300,
  },
  阿塔尼斯: {
    pinyin: 'atns',
    race: 'P',
    value: 1000,
    type: 'normal',
    tag: {
      biological: true,
      psionic: true,
      heroic: true,
    },
    health: 200,
    shield: 300,
  },
  激励者: {
    pinyin: 'jlz',
    race: 'P',
    value: 150,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
      psionic: true,
    },
    health: 40,
    shield: 40,
  },
  '追猎者(精英)': {
    pinyin: 'zlz(jy)',
    race: 'P',
    value: 350,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 150,
    shield: 130,
  },
  '狂热者(精英)': {
    pinyin: 'krz(jy)',
    race: 'P',
    value: 200,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 175,
    shield: 80,
  },
  '旋风狂热者(精英)': {
    pinyin: 'xfkrz(jy)',
    race: 'P',
    value: 200,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 175,
    shield: 80,
  },
  '使徒(精英)': {
    pinyin: 'st(jy)',
    race: 'P',
    value: 250,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 70,
    shield: 70,
  },
  '黑暗圣堂武士(精英)': {
    pinyin: 'hastws(jy)',
    race: 'P',
    value: 375,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      psionic: true,
    },
    health: 80,
    shield: 80,
  },
  '巨像(精英)': {
    pinyin: 'jx(jy)',
    race: 'P',
    value: 800,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
    },
    health: 350,
    shield: 250,
  },
  '虚空辉光舰(精英)': {
    pinyin: 'xkhgj(jy)',
    race: 'P',
    value: 550,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      air: true,
    },
    health: 250,
    shield: 150,
  },
  '执政官(精英)': {
    pinyin: 'zzg(jy)',
    race: 'P',
    value: 650,
    type: 'normal',
    tag: {
      psionic: true,
      massive: true,
    },
    health: 10,
    shield: 450,
  },
  女妖: {
    pinyin: 'ny',
    race: 'T',
    value: 250,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
      air: true,
    },
    health: 140,
  },
  诺娃: {
    pinyin: 'nw',
    race: 'T',
    value: 400,
    type: 'normal',
    tag: {
      biological: true,
      psionic: true,
    },
    health: 300,
  },
  火蝠: {
    pinyin: 'hf',
    race: 'T',
    value: 125,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 100,
  },
  '火蝠(精英)': {
    pinyin: 'hf(jy)',
    race: 'T',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 275,
  },
  幽魂: {
    pinyin: 'yh',
    race: 'T',
    value: 275,
    type: 'normal',
    tag: {
      biological: true,
      psionic: true,
    },
    health: 160,
  },
  恶蝠游骑兵: {
    pinyin: 'efyqb',
    race: 'T',
    value: 650,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      mechanical: true,
    },
    health: 400,
  },
  '劫掠者(皇家卫队)': {
    pinyin: 'jlz(hjwd)',
    race: 'N',
    value: 800,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      heroic: true,
    },
    health: 400,
  },
  反应堆: {
    pinyin: 'fyd',
    race: 'T',
    value: 0,
    type: 'special structure',
    tag: {},
    health: 0,
  },
  科技实验室: {
    pinyin: 'kjsys',
    race: 'T',
    value: 0,
    type: 'special structure',
    tag: {},
    health: 0,
  },
  高级科技实验室: {
    pinyin: 'gjkjsys',
    race: 'T',
    value: 0,
    type: 'special structure',
    tag: {},
    health: 0,
  },
  收割者: {
    pinyin: 'sgz',
    race: 'T',
    value: 100,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 60,
  },
  恶蝠: {
    pinyin: 'ef',
    race: 'T',
    value: 100,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      mechanical: true,
    },
    health: 135,
  },
  恶火: {
    pinyin: 'eh',
    race: 'T',
    value: 100,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
    },
    health: 90,
  },
  陆战队员: {
    pinyin: 'lzdy',
    race: 'T',
    value: 50,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 45,
  },
  响尾蛇战车: {
    pinyin: 'xwszc',
    race: 'T',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 200,
  },
  医疗兵: {
    pinyin: 'ylb',
    race: 'T',
    value: 125,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 60,
  },
  攻城坦克: {
    pinyin: 'gctk',
    race: 'T',
    value: 275,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 175,
  },
  歌利亚: {
    pinyin: 'gly',
    race: 'T',
    value: 200,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 150,
  },
  寡妇雷: {
    pinyin: 'gfl',
    race: 'T',
    value: 100,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
    },
    health: 90,
  },
  劫掠者: {
    pinyin: 'jlz',
    race: 'T',
    value: 125,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 125,
  },
  医疗运输机: {
    pinyin: 'ylysj',
    race: 'T',
    value: 200,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      air: true,
    },
    health: 150,
  },
  秃鹫: {
    pinyin: 'tj',
    race: 'T',
    value: 75,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
    },
    health: 75,
  },
  飓风: {
    pinyin: 'jf',
    race: 'T',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 120,
  },
  铁鸦: {
    pinyin: 'ty',
    race: 'T',
    value: 300,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
      air: true,
    },
    health: 140,
  },
  战狼: {
    pinyin: 'zl',
    race: 'T',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 280,
  },
  维京战机: {
    pinyin: 'wjzj',
    race: 'T',
    value: 225,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      air: true,
    },
    health: 135,
  },
  '维京战机<机甲>': {
    pinyin: 'wjzj<jj>',
    race: 'T',
    value: 225,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 135,
  },
  解放者: {
    pinyin: 'jfz',
    race: 'T',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      air: true,
    },
    health: 180,
  },
  斯台特曼: {
    pinyin: 'sttm',
    race: 'T',
    value: 200,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      heroic: true,
    },
    health: 150,
  },
  思旺: {
    pinyin: 'sw',
    race: 'T',
    value: 200,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      heroic: true,
    },
    health: 200,
  },
  热辣贝蒂: {
    pinyin: 'rlbd',
    race: 'T',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      structure: true,
    },
    health: 750,
  },
  怨灵战机: {
    pinyin: 'ylzj',
    race: 'T',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      air: true,
    },
    health: 180,
  },
  黄昏之翼: {
    pinyin: 'hhzy',
    race: 'T',
    value: 275,
    type: 'normal',
    tag: {
      light: true,
      mechanical: true,
      air: true,
    },
    health: 155,
  },
  泰凯斯: {
    pinyin: 'tks',
    race: 'T',
    value: 500,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      heroic: true,
    },
    health: 240,
  },
  牛头人陆战队员: {
    pinyin: 'ntrlzdy',
    race: 'T',
    value: 550,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 350,
  },
  鱼人陆战队员: {
    pinyin: 'yrlzdy',
    race: 'T',
    value: 75,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 70,
  },
  雷神: {
    pinyin: 'ls',
    race: 'T',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
    },
    health: 400,
  },
  '雷诺(指挥官)': {
    pinyin: 'ln(zhg)',
    race: 'T',
    value: 800,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      heroic: true,
    },
    health: 350,
  },
  '雷诺(狙击手)': {
    pinyin: 'ln(jjs)',
    race: 'T',
    value: 650,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      heroic: true,
    },
    health: 175,
  },
  沃菲尔德将军: {
    pinyin: 'wfedjj',
    race: 'T',
    value: 0,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      heroic: true,
    },
    health: 200,
  },
  帝盾卫兵: {
    pinyin: 'ddwb',
    race: 'T',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 200,
  },
  战列巡航舰: {
    pinyin: 'zlxhj',
    race: 'T',
    value: 700,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
      air: true,
    },
    health: 550,
  },
  '陆战队员(精英)': {
    pinyin: 'lzdy(jy)',
    race: 'T',
    value: 125,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 90,
  },
  '劫掠者(精英)': {
    pinyin: 'jlz(jy)',
    race: 'T',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 250,
  },
  '歌利亚(精英)': {
    pinyin: 'gly(jy)',
    race: 'T',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 200,
  },
  '战狼(精英)': {
    pinyin: 'zl(jy)',
    race: 'T',
    value: 450,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 400,
  },
  '维京战机(精英)': {
    pinyin: 'wjzj(jy)',
    race: 'T',
    value: 225,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      air: true,
    },
    health: 180,
  },
  '维京战机<机甲>(精英)': {
    pinyin: 'wjzj<jj>jy)',
    race: 'T',
    value: 225,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 180,
  },
  '攻城坦克(精英)': {
    pinyin: 'gctk(jy)',
    race: 'T',
    value: 625,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
    },
    health: 225,
  },
  幼雷兽: {
    pinyin: 'yls',
    race: 'Z',
    value: 180,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 200,
  },
  被感染的女妖: {
    pinyin: 'bgrdny',
    race: 'Z',
    value: 200,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      air: true,
    },
    health: 140,
  },
  末日巨兽: {
    pinyin: 'mrjs',
    race: 'Z',
    value: 3000,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      mechanical: true,
      massive: true,
      heroic: true,
    },
    health: 3500,
  },
  跳虫: {
    pinyin: 'tc',
    race: 'Z',
    value: 25,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 35,
  },
  爆虫: {
    pinyin: 'bc',
    race: 'Z',
    value: 65,
    type: 'normal',
    tag: {
      biological: true,
    },
    health: 30,
  },
  蟑螂: {
    pinyin: 'zl',
    race: 'Z',
    value: 100,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 145,
  },
  破坏者: {
    pinyin: 'phz',
    race: 'Z',
    value: 200,
    type: 'normal',
    tag: {
      biological: true,
    },
    health: 120,
  },
  刺蛇: {
    pinyin: 'cs',
    race: 'Z',
    value: 150,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 90,
  },
  被感染的陆战队员: {
    pinyin: 'bgrdlzdy',
    race: 'Z',
    value: 100,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 75,
  },
  异龙: {
    pinyin: 'yl',
    race: 'Z',
    value: 150,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      air: true,
    },
    health: 120,
  },
  雷兽: {
    pinyin: 'ls',
    race: 'Z',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
    },
    health: 500,
  },
  虫后: {
    pinyin: 'ch',
    race: 'Z',
    value: 150,
    type: 'normal',
    tag: {
      biological: true,
      psionic: true,
    },
    health: 175,
  },
  菌毯肿瘤: {
    pinyin: 'jtzl',
    race: 'Z',
    value: 0,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      structure: true,
    },
    health: 50,
  },
  守卫: {
    pinyin: 'sw',
    race: 'Z',
    value: 200,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      air: true,
    },
    health: 150,
  },
  潜伏者: {
    pinyin: 'qfz',
    race: 'Z',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 200,
  },
  感染者: {
    pinyin: 'grz',
    race: 'Z',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      psionic: true,
    },
    health: 90,
  },
  畸变体: {
    pinyin: 'jbt',
    race: 'Z',
    value: 400,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
    },
    health: 400,
  },
  腐化者: {
    pinyin: 'fhz',
    race: 'Z',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      air: true,
    },
    health: 200,
  },
  巢虫领主: {
    pinyin: 'cclz',
    race: 'Z',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
      air: true,
    },
    health: 225,
  },
  飞蛇: {
    pinyin: 'fs',
    race: 'Z',
    value: 400,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      psionic: true,
      air: true,
    },
    health: 150,
  },
  爆蚊: {
    pinyin: 'bw',
    race: 'Z',
    value: 37,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      air: true,
    },
    health: 25,
  },
  莽兽: {
    pinyin: 'ms',
    race: 'Z',
    value: 1000,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
      heroic: true,
    },
    health: 1200,
  },
  利维坦: {
    pinyin: 'lwt',
    race: 'Z',
    value: 2000,
    type: 'normal',
    tag: {
      biological: true,
      massive: true,
      heroic: true,
      air: true,
    },
    health: 1500,
  },
  扎加拉: {
    pinyin: 'zjl',
    race: 'Z',
    value: 400,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      psionic: true,
      heroic: true,
    },
    health: 500,
  },
  斯托科夫: {
    pinyin: 'stkf',
    race: 'Z',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      heroic: true,
    },
    health: 500,
  },
  '跳虫(精英)': {
    pinyin: 'tc(jy)',
    race: 'Z',
    value: 75,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 120,
  },
  '爆虫(精英)': {
    pinyin: 'bc(jy)',
    race: 'Z',
    value: 150,
    type: 'normal',
    tag: {
      biological: true,
    },
    health: 75,
  },
  '蟑螂(精英)': {
    pinyin: 'zl(jy)',
    race: 'Z',
    value: 200,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 250,
  },
  '破坏者(精英)': {
    pinyin: 'phz(jy)',
    race: 'Z',
    value: 400,
    type: 'normal',
    tag: {
      biological: true,
    },
    health: 220,
  },
  '刺蛇(精英)': {
    pinyin: 'cs(jy)',
    race: 'Z',
    value: 275,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
    },
    health: 160,
  },
  '异龙(精英)': {
    pinyin: 'yl(jy)',
    race: 'Z',
    value: 300,
    type: 'normal',
    tag: {
      light: true,
      biological: true,
      air: true,
    },
    health: 180,
  },
  '雷兽(精英)': {
    pinyin: 'ls(jy)',
    race: 'Z',
    value: 700,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
    },
    health: 600,
  },
  母舰核心: {
    pinyin: 'mjhx',
    race: 'P',
    value: 0,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      psionic: true,
      heroic: true,
      air: true,
    },
    health: 130,
    shield: 60,
  },
  母舰: {
    pinyin: 'mj',
    race: 'P',
    value: 800,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      psionic: true,
      massive: true,
      heroic: true,
      air: true,
    },
    health: 350,
    shield: 350,
  },
  毒气炮塔: {
    pinyin: 'dqpt',
    race: 'N',
    value: 500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      structure: true,
    },
    health: 250,
  },
  凯达琳巨石: {
    pinyin: 'kdljs',
    race: 'P',
    value: 400,
    type: 'normal',
    tag: {
      armored: true,
      structure: true,
    },
    health: 200,
    shield: 100,
  },
  岗哨机枪: {
    pinyin: 'gsjq',
    race: 'N',
    value: 100,
    type: 'normal',
    tag: {
      armored: true,
      structure: true,
    },
    health: 125,
  },
  行星要塞: {
    pinyin: 'xxys',
    race: 'N',
    value: 1200,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      structure: true,
      heroic: true,
    },
    health: 1500,
  },
  星门: {
    pinyin: 'xm',
    race: 'P',
    value: 0,
    type: 'normal',
    tag: {},
    health: 0,
  },
  作战指挥中心: {
    pinyin: 'zzzhzx',
    race: 'T',
    value: 1500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      structure: true,
      heroic: true,
    },
    health: 1500,
  },
  风暴对地导弹塔: {
    pinyin: 'fbddddt',
    race: 'T',
    value: 75,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      structure: true,
    },
    health: 150,
  },
  粒子光炮: {
    pinyin: 'lzgp',
    race: 'N',
    value: 2000,
    type: 'normal',
    tag: {
      armored: true,
      structure: true,
      heroic: true,
    },
    health: 1000,
    shield: 500,
  },
  奥丁: {
    pinyin: 'ad',
    race: 'T',
    value: 2000,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
      heroic: true,
    },
    health: 3200,
  },
  休伯利安号: {
    pinyin: 'xblah',
    race: 'T',
    value: 9000,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      heroic: true,
      air: true,
    },
    health: 6000,
  },
  '维京战机(皇家卫队)': {
    pinyin: 'wjzj(hjwd)',
    race: 'T',
    value: 800,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      heroic: true,
      air: true,
    },
    health: 800,
  },
  '维京战机<机甲>(皇家卫队)': {
    pinyin: 'wjzj<jj>hjwd)',
    race: 'T',
    value: 800,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      heroic: true,
    },
    health: 800,
  },
  '攻城坦克(皇家卫队)': {
    pinyin: 'gctk(hjwd)',
    race: 'T',
    value: 1000,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      heroic: true,
    },
    health: 600,
  },
  '雷神(皇家卫队)': {
    pinyin: 'ls(hjwd)',
    race: 'T',
    value: 1500,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
      heroic: true,
    },
    health: 1200,
  },
  '战列巡航舰(皇家卫队)': {
    pinyin: 'zlxhj(hjwd)',
    race: 'T',
    value: 1700,
    type: 'normal',
    tag: {
      armored: true,
      mechanical: true,
      massive: true,
      heroic: true,
      air: true,
    },
    health: 1600,
  },
  混合体掠夺者: {
    pinyin: 'hhtldz',
    race: 'N',
    value: 250,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      heroic: true,
    },
    health: 250,
  },
  混合体天罚者: {
    pinyin: 'hhttfz',
    race: 'N',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      heroic: true,
      air: true,
    },
    health: 150,
    shield: 100,
  },
  混合体支配者: {
    pinyin: 'hhtzpz',
    race: 'N',
    value: 1400,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      psionic: true,
      massive: true,
      heroic: true,
    },
    health: 1000,
    shield: 100,
  },
  混合体实验体: {
    pinyin: 'hhtsyt',
    race: 'N',
    value: 1600,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
      heroic: true,
    },
    health: 1000,
    shield: 300,
  },
  原始穿刺者: {
    pinyin: 'ysccz',
    race: 'Z',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 200,
  },
  原始守卫: {
    pinyin: 'yssw',
    race: 'Z',
    value: 350,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      air: true,
    },
    health: 350,
  },
  毒裂兽: {
    pinyin: 'dls',
    race: 'Z',
    value: 300,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
    },
    health: 250,
  },
  王兽: {
    pinyin: 'ws',
    race: 'Z',
    value: 2500,
    type: 'normal',
    tag: {
      armored: true,
      biological: true,
      massive: true,
      heroic: true,
    },
    health: 2400,
  },
}
