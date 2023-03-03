import GameConfig from '@/components/GameConfig'
import { DefaultGameConfig } from '@sctavern/emulator'
import { useNavigate } from 'react-router'
import { Api } from '@/api'

function RemoteConfig() {
  const navigate = useNavigate()

  const [tab, setTab] = useState(0)

  const [id, setId] = useState(Math.floor(Math.random() * 100000).toString())
  const [pos, setPos] = useState(0)
  const [ob, setOb] = useState(false)

  const [ids, setIds] = useState<string[]>([])
  const [showId, setShowId] = useState(false)
  const [querying, setQuerying] = useState(false)

  return (
    <Container maxWidth="sm">
      <Dialog open={showId} onClose={() => setShowId(false)}>
        <DialogContent>
          <Grid container direction="column" gap={1}>
            <Grid item>
              <span>已建立的游戏</span>
            </Grid>
            {ids.map((i, index) => {
              return (
                <Grid item key={index}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setId(i)
                      setTab(1)
                      setShowId(false)
                    }}
                  >
                    加入 {i}
                  </Button>
                </Grid>
              )
            })}
          </Grid>
        </DialogContent>
      </Dialog>

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
                <Box gridColumn="span 6">
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
                  gridColumn="span 3"
                  alignSelf="center"
                  justifySelf="center"
                >
                  <Button
                    variant="contained"
                    disabled={querying}
                    onClick={() => {
                      setQuerying(true)
                      Api.Query()
                        .then(res => {
                          setQuerying(false)
                          setIds(res.data.ids)
                          setShowId(true)
                        })
                        .catch(() => {
                          setQuerying(false)
                        })
                    }}
                  >
                    列出
                  </Button>
                </Box>
                <Box
                  gridColumn="span 3"
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
                Api.Setup(id, config).then(res => {
                  setTab(1)
                })
              }}
            ></GameConfig>
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
                  setTab(0)
                }}
              >
                取消
              </Button>
              <Button
                onClick={() => {
                  navigate(
                    '/remote/play?' +
                      new URLSearchParams({
                        pos: pos.toString(),
                        id,
                        ob: ob ? '1' : '0',
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
