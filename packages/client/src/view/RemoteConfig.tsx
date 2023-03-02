import GameConfig from '@/components/GameConfig'
import { DefaultGameConfig } from '@sctavern/emulator'
import { useNavigate } from 'react-router'
import axios from 'axios'

function RemoteConfig() {
  const navigate = useNavigate()

  const [tab, setTab] = useState(0)

  const [id, setId] = useState(Math.floor(Math.random() * 100000).toString())
  const [pos, setPos] = useState(0)
  const [ob, setOb] = useState(false)

  return (
    <Container maxWidth="sm">
      <CardView>
        <CardContent>
          <Stepper activeStep={tab}>
            <Step key="游戏配置">
              <StepLabel>游戏配置</StepLabel>
            </Step>
            <Step key="连接配置">
              <StepLabel>连接配置</StepLabel>
            </Step>
          </Stepper>
        </CardContent>
        {tab === 0 && (
          <Fragment>
            <CardContent>
              <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                rowGap={2}
              >
                <Box gridColumn="span 10">
                  <TextField
                    fullWidth
                    label="游戏id"
                    value={id}
                    onChange={event => {
                      setId(event.target.value)
                    }}
                  ></TextField>
                </Box>
                <Box
                  gridColumn="span 2"
                  alignSelf="center"
                  justifySelf="center"
                >
                  <Button
                    variant="contained"
                    onClick={() => {
                      setId(Math.floor(Math.random() * 100000).toString())
                    }}
                  >
                    随机
                  </Button>
                </Box>
              </Box>
            </CardContent>
            <GameConfig
              local={false}
              label="创建"
              trigger={config => {
                axios({
                  url: '/api/setup',
                  baseURL: `http://${window.location.host}`,
                  method: 'POST',
                  data: {
                    id,
                    config,
                  },
                }).then(res => {
                  setTab(1)
                })
              }}
            >
              <Button
                onClick={() => {
                  setTab(1)
                }}
              >
                直连
              </Button>
            </GameConfig>
          </Fragment>
        )}
        {tab === 1 && (
          <Fragment>
            <CardContent>
              <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                rowGap={2}
              >
                <Box gridColumn="span 10">
                  <TextField
                    fullWidth
                    label="游戏id"
                    disabled={true}
                    value={id}
                  ></TextField>
                </Box>
                <Box gridColumn="span 10">
                  <TextField
                    fullWidth
                    label="座位"
                    value={pos}
                    onChange={event => {
                      setPos(Number(event.target.value))
                    }}
                  ></TextField>
                </Box>
                <Box gridColumn="span 6">
                  <FormControlLabel
                    label="OB模式"
                    control={
                      <Checkbox
                        name="OB模式"
                        checked={ob}
                        onChange={event => {
                          setOb(event.target.checked)
                        }}
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
                    '/remote/play?' +
                      new URLSearchParams({
                        pos: pos.toString(),
                        id,
                      })
                  )
                }}
              >
                连接
              </Button>
            </CardActions>
          </Fragment>
        )}
      </CardView>
    </Container>
  )
}

export default RemoteConfig
