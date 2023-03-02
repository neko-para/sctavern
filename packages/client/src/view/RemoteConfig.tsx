import { useNavigate } from 'react-router'

function RemoteConfig() {
  const navigate = useNavigate()

  const [url, setUrl] = useState('localhost:6658')
  const [id, setId] = useState(Math.floor(Math.random() * 100000).toString())
  const [pos, setPos] = useState(0)
  const [ob, setOb] = useState(false)

  return (
    <Container maxWidth="sm">
      <CardView>
        <CardContent>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" rowGap={2}>
            <Box gridColumn="span 10">
              <TextField
                fullWidth
                label="地址"
                value={url}
                onChange={event => {
                  setUrl(event.target.value)
                }}
              ></TextField>
            </Box>
            <Box gridColumn="span 2"></Box>
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
            <Box gridColumn="span 2" alignSelf="center" justifySelf="center">
              <Button
                variant="contained"
                onClick={() => {
                  setId(Math.floor(Math.random() * 100000).toString())
                }}
              >
                随机
              </Button>
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
                    remote: url,
                    pos: pos.toString(),
                    id,
                  })
              )
            }}
          >
            连接
          </Button>
        </CardActions>
      </CardView>
    </Container>
  )
}

export default RemoteConfig
