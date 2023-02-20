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

function GameConfig() {
  const [config, setConfig] = useState<GameConfig>({
    Pack: ['核心'],
    Seed: Math.floor(Math.random() * 1000000),
    Role: ['白板'],
    Mutation: [],
    Pve: false,
    PoolPack: PresetPoolPack,
    ActivePack: PvpPresetActivePack,
    ActiveUnit: PvpPresetActiveUnit,
  })

  const navigate = useNavigate()

  const handlePackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const packs = event.target.checked
      ? config.Pack.concat([event.target.name as PackKey])
      : config.Pack.filter(p => p !== event.target.name)
    setConfig({
      ...config,
      Pack: packs,
    })
  }

  const allRole = AllRole.filter(r => !RoleData[r].ext)

  const handlePveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setConfig({
        ...config,
        Pve: true,
        ActivePack: PvePresetActivePack,
        ActiveUnit: PvePresetActiveUnit,
      })
    } else {
      setConfig({
        ...config,
        Pve: false,
        ActivePack: PvpPresetActivePack,
        ActiveUnit: PvpPresetActiveUnit,
      })
    }
  }

  return (
    <Container>
      <CardView>
        <CardContent className="InfoCard">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" rowGap={2}>
            <Box gridColumn="span 1"></Box>
            <Box gridColumn="span 8">
              <TextField
                fullWidth
                type="number"
                label="种子"
                value={config.Seed.toString()}
                onChange={event => {
                  setConfig({
                    ...config,
                    Seed: Math.floor(Number(event.target.value) ?? 1),
                  })
                }}
              ></TextField>
            </Box>
            <Grid
              gridColumn="span 2"
              container
              justifyContent="center"
              alignContent="center"
            >
              <Button
                variant="contained"
                onClick={() => {
                  setConfig({
                    ...config,
                    Seed: Math.floor(Math.random() * 1000000),
                  })
                }}
              >
                随机
              </Button>
            </Grid>
            <Box gridColumn="span 1"></Box>
            <Box gridColumn="span 1"></Box>
            <Box
              gridColumn="span 8"
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
            </Box>
            <Grid
              gridColumn="span 2"
              container
              justifyContent="center"
              alignContent="center"
            >
              <Button
                variant="contained"
                onClick={() => {
                  setConfig({
                    ...config,
                    Pack: [
                      '核心',
                      ...lcg.shuffle(ExtPack.map(x => x)).slice(0, 2),
                    ],
                  })
                }}
              >
                随机
              </Button>
            </Grid>
            <Box gridColumn="span 1"></Box>
            <Box gridColumn="span 1"></Box>
            <Box gridColumn="span 8">
              <FormControl fullWidth>
                <InputLabel>角色</InputLabel>
                <Select
                  label="角色"
                  value={config.Role[0]}
                  onChange={event => {
                    setConfig({
                      ...config,
                      Role: [event.target.value as RoleKey],
                    })
                  }}
                >
                  {allRole.map((role, index) => {
                    return (
                      <MenuItem value={role} key={index}>
                        {role}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
            <Grid
              gridColumn="span 2"
              container
              justifyContent="center"
              alignContent="center"
            >
              <Button
                variant="contained"
                onClick={() => {
                  setConfig({
                    ...config,
                    Role: [lcg.one_of(allRole) as RoleKey],
                  })
                }}
              >
                随机
              </Button>
            </Grid>
            <Box gridColumn="span 1"></Box>
            <Box gridColumn="span 1"></Box>
            <Box gridColumn="span 4">
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
