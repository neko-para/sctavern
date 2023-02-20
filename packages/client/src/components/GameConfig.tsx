import {
  PresetPoolPack,
  PvpPresetActivePack,
  PvpPresetActiveUnit,
} from '@sctavern/data'
import type { GameConfig } from '@sctavern/emulator'
import { redirect, useNavigate } from 'react-router'

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

  return (
    <Container>
      <CardView>
        <CardContent className="InfoCard">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
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
