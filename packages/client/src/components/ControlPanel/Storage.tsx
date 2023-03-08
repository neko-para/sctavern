import { WrapperSave, Wrapper } from '@sctavern/emulator'
import Zip from 'jszip'
import FileSaver from 'file-saver'

export interface Props {
  wrapper: Wrapper
}

function Storage(props: Props) {
  const [save, setSave] = useState<WrapperSave | null>(null)

  function doSave(s: WrapperSave) {
    localStorage.setItem(
      'save',
      JSON.stringify({
        save: s,
      })
    )
    setSave(s)
  }

  function doLoad() {
    try {
      const { save: s } = JSON.parse(localStorage.getItem('save') as string)
      setSave(s)
    } catch {
      setSave(null)
    }
  }

  function doClean() {
    localStorage.removeItem('save')
    setSave(null)
  }

  async function Download() {
    const data = JSON.stringify(save)
    const zip = Zip()
    zip.file('save.txt', data)
    const content = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
    })
    FileSaver.saveAs(content, 'save.SCTReplay')
  }

  async function Upload(data: Blob) {
    const zip = await Zip.loadAsync(data)
    setSave(JSON.parse((await zip.file('save.txt')?.async('string')) || '{}'))
  }

  useEffect(() => {
    doLoad()
  }, [])

  const [showImport, setShowImport] = useState(false)
  const [files, setFiles] = useState<FileList | null>(null)
  const fileEl = useRef<HTMLInputElement | null>(null)

  return (
    <Fragment>
      <Dialog
        fullWidth
        open={showImport}
        onClose={() => {
          setShowImport(false)
        }}
      >
        <DialogContent>
          <Grid container gap={2}>
            <Button variant="contained" component="label">
              上传
              <input
                hidden
                ref={fileEl}
                type="file"
                accept=".SCTReplay"
                onChange={() => {
                  setFiles(fileEl.current?.files ?? null)
                }}
              ></input>
            </Button>
            {files && files.length > 0 && (
              <Box alignSelf="center">{files[0].name}</Box>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={!files || files.length === 0}
            onClick={() => {
              if (files && files.length > 0) {
                Upload(files[0]).then(() => {
                  setShowImport(false)
                })
              }
            }}
          >
            导入
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        onClick={() => {
          doSave(props.wrapper.save)
        }}
      >
        保存
      </Button>
      <Button
        disabled={!save}
        onClick={() => {
          if (save) {
            props.wrapper.load(save)
          } else {
            console.log('Save not found')
          }
        }}
      >
        读取
      </Button>
      <Button
        disabled={!save}
        onClick={() => {
          doClean()
        }}
      >
        清除
      </Button>
      <div></div>
      <Button
        disabled={!save}
        onClick={() => {
          Download()
        }}
      >
        导出
      </Button>
      <Button
        onClick={() => {
          setShowImport(true)
        }}
      >
        导入
      </Button>
    </Fragment>
  )
}

export default Storage
