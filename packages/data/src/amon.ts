import { UnitKey } from './unit'

export function rep(v: UnitKey, n: number) {
  return Array.from({ length: n }, () => v)
}

export const Amon: {
  [key in string]?: {
    units: UnitKey[]
  }
} = {
  SCV: {
    units: rep('SCV', 15),
  },
  探机: {
    units: [...rep('探机', 6), '光子炮台'],
  },
  工蜂: {
    units: [...rep('工蜂', 6), '脊针爬虫'],
  },

  陆战队员: {
    units: rep('陆战队员', 10),
  },
  狂热者: {
    units: rep('狂热者', 5),
  },

  幽灵: {
    units: [...rep('掠食者', 6), ...rep('幽灵<埃蒙>', 6)],
  },
  易爆感染体: {
    units: [...rep('易爆感染体', 10), ...rep('被感染的陆战队员', 10)],
  },

  混合体掠夺者: {
    units: [...rep('混合体掠夺者', 8), ...rep('混合体天罚者', 10)],
  },

  蟑螂: {
    units: [...rep('蟑螂', 20), ...rep('破坏者', 10)],
  },

  飞龙: {
    units: rep('异龙', 30),
  },

  进化腔: {
    units: [...rep('刺蛇', 20), ...rep('雷兽', 6), '王兽'],
  },

  斯托科夫: {
    units: [
      ...rep('畸变体', 15),
      ...rep('后虫', 4),
      ...rep('被感染的陆战队员', 20),
      '末日巨兽',
      '斯托科夫',
    ],
  },

  科学球: {
    units: [
      ...rep('寡妇雷', 40),
      ...rep('飓风', 40),
      ...rep('秃鹫', 20),
      ...rep('科学船', 4),
    ],
  },

  母舰核心: {
    units: [...rep('旋风狂热者(精英)', 30), ...rep('虚空辉光舰', 30), '母舰'],
  },

  阿尔达瑞斯: {
    units: [
      ...rep('风暴战舰(精英)', 30),
      ...rep('龙骑士', 35),
      ...rep('海盗船', 10),
      ...rep('航母', 5),
      '仲裁者',
    ],
  },
}
