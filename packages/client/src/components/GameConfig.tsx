import {
  AllRole,
  ExtPack,
  PackKey,
  PresetPoolPack,
  PvePresetActivePack,
  PvePresetActiveUnit,
  PvpPresetActivePack,
  PvpPresetActiveUnit,
  RoleData,
  RoleKey,
} from '@sctavern/data'
import { type GameConfig, LCG } from '@sctavern/emulator'
import { useNavigate } from 'react-router'

const lcg = new LCG(Math.floor(Math.random() * 100000))

const noPveRoles: RoleKey[] = [
  '跳虫',
  '蒙斯克',
  '雷神',
  '机械哨兵',
  '异龙',
  '医疗兵',
  '分裂池',
  '响尾蛇',
  // '混合体',
  '德哈卡',
  '星港',
  '进化腔',
  '锻炉',
  '扎加拉',
  '大力神',
  '凯瑞甘',
  '米拉',
  '先知',
  '阿尔达瑞斯',
  '斯托科夫',
  '解放者',
  '干扰者',
]

function RoleSelector(props: {
  role: RoleKey[]
  setRole: (r: RoleKey[]) => void
}) {
  const allRole = useMemo(() => AllRole.filter(r => !RoleData[r].ext), [])

  const getAvailableRoles = useCallback(
    (index: number) => {
      return allRole.filter(
        r =>
          r === '白板' || !props.role.filter((r, i) => i !== index).includes(r)
      )
    },
    [props.role, allRole]
  )

  return (
    <Fragment>
      {props.role.map((role, index) => {
        return (
          <Fragment key={index}>
            <Box gridColumn="span 8">
              <FormControl fullWidth>
                <InputLabel>角色</InputLabel>
                <Select
                  label="角色"
                  value={role}
                  onChange={event => {
                    props.setRole(
                      produce(props.role, draft => {
                        draft[index] = event.target.value as RoleKey
                      })
                    )
                  }}
                >
                  {getAvailableRoles(index).map((role, index) => {
                    return (
                      <MenuItem value={role} key={index}>
                        {role}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box gridColumn="span 2" alignSelf="center" justifySelf="center">
              <Button
                variant="contained"
                disabled={props.role.length === 1}
                onClick={() => {
                  props.setRole(
                    produce(props.role, draft => {
                      draft.splice(index, 1)
                    })
                  )
                }}
              >
                删除
              </Button>
            </Box>
            <Box gridColumn="span 2" alignSelf="center" justifySelf="center">
              <Button
                variant="contained"
                onClick={() => {
                  props.setRole(
                    produce(props.role, draft => {
                      draft[index] = lcg.one_of(
                        getAvailableRoles(index)
                      ) as RoleKey
                    })
                  )
                }}
              >
                随机
              </Button>
            </Box>
          </Fragment>
        )
      })}
      <Box gridColumn="span 2" alignSelf="center" justifySelf="center">
        <Button
          variant="contained"
          onClick={() => {
            props.setRole([...props.role, '白板'])
          }}
        >
          添加
        </Button>
      </Box>
    </Fragment>
  )
}

function GameConfig() {
  const [config, setConfig] = useState<GameConfig>({
    Pack: ['核心'],
    Seed: Math.floor(Math.random() * 1000000),
    Role: [['白板']],
    Mutation: [],
    Pve: false,
    PoolPack: PresetPoolPack,
    ActivePack: PvpPresetActivePack,
    ActiveUnit: PvpPresetActiveUnit,
  })

  const navigate = useNavigate()

  const handlePackChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfig(
        produce(config, draft => {
          if (event.target.checked) {
            draft.Pack.push(event.target.name as PackKey)
          } else {
            draft.Pack = draft.Pack.filter(p => p !== event.target.name)
          }
        })
      )
    },
    [config]
  )

  const handlePveChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfig(
        produce(config, draft => {
          if (event.target.checked) {
            draft.Pve = true
            draft.ActivePack = PvePresetActivePack
            draft.ActiveUnit = PvePresetActiveUnit
          } else {
            draft.Pve = false
            draft.ActivePack = PvpPresetActivePack
            draft.ActiveUnit = PvpPresetActiveUnit
          }
        })
      )
    },
    [config]
  )

  return (
    <Container maxWidth="sm">
      <CardView>
        <CardContent className="">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" rowGap={2}>
            <Box gridColumn="span 10">
              <TextField
                fullWidth
                type="number"
                label="种子"
                value={config.Seed.toString()}
                onChange={event => {
                  setConfig(
                    produce(config, draft => {
                      draft.Seed = Math.floor(Number(event.target.value) ?? 1)
                    })
                  )
                }}
              ></TextField>
            </Box>
            <Box gridColumn="span 2" alignSelf="center" justifySelf="center">
              <Button
                variant="contained"
                onClick={() => {
                  setConfig(
                    produce(config, draft => {
                      draft.Seed = Math.floor(Math.random() * 1000000)
                    })
                  )
                }}
              >
                随机
              </Button>
            </Box>
            <Box
              gridColumn="span 10"
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
            >
              {ExtPack.map((pack, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    label={pack}
                    control={
                      <Checkbox
                        name={pack}
                        checked={config.Pack.includes(pack)}
                        onChange={handlePackChange}
                      ></Checkbox>
                    }
                  ></FormControlLabel>
                )
              })}
            </Box>{' '}
            <Box gridColumn="span 2" alignSelf="center" justifySelf="center">
              <Button
                variant="contained"
                onClick={() => {
                  setConfig(
                    produce(config, draft => {
                      draft.Pack = [
                        '核心',
                        ...lcg.shuffle(ExtPack.map(x => x)).slice(0, 2),
                      ]
                    })
                  )
                }}
              >
                随机
              </Button>
            </Box>
            <RoleSelector
              role={config.Role[0]}
              setRole={role => {
                setConfig({
                  ...config,
                  Role: [role],
                })
              }}
            ></RoleSelector>
            <Box gridColumn="span 6">
              <FormControlLabel
                label="启用PVE"
                control={
                  <Checkbox
                    name="启用PVE"
                    checked={config.Pve}
                    onChange={handlePveChange}
                  ></Checkbox>
                }
              ></FormControlLabel>
            </Box>
            <Box gridColumn="span 12" alignSelf="center">
              {config.Pve &&
              config.Role[0]
                .map(r => noPveRoles.includes(r))
                .reduce((a, b) => a || b, false)
                ? '警告: 当前角色的预言尚未完成'
                : ''}
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              navigate(
                '/local/play?' +
                  new URLSearchParams({
                    config: JSON.stringify(config),
                  })
              )
            }}
          >
            开始
          </Button>
        </CardActions>
      </CardView>
    </Container>
  )
}

export default GameConfig
