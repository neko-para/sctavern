import { PortableSave, Wrapper } from '@sctavern/emulator'
import Zip from 'jszip'
import FileSaver from 'file-saver'

export interface Props {
  wrapper: Wrapper
}

function Storage(props: Props) {
  const [save, setSave] = useState<PortableSave | null>(null)

  function doSave(s: PortableSave) {
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

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Storage
