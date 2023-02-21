import { Input } from '@mui/material'

interface Item {
  name: string
  pinyin: string
}

export interface Props {
  item: Item[]
  onChoose: (item: Item) => void
}

function Searcher(props: Props) {
  const [key, setKey] = useState('')
  const result = useMemo(() => {
    return props.item
      .map(item => ({
        item,
        index: item.pinyin.indexOf(key),
      }))
      .filter(item => item.index !== -1)
      .sort((a, b) => {
        return a.index === b.index
          ? a.item.pinyin.localeCompare(b.item.pinyin)
          : a.index - b.index
      })
      .map(item => item.item)
      .slice(0, 10)
  }, [props.item, key])
  return (
    <Fragment>
      <Input
        value={key}
        onChange={e => setKey(e.target.value.toLowerCase())}
      ></Input>
      {result.map((item, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              props.onChoose(item)
            }}
          >
            {item.pinyin} {item.name}
          </Button>
        )
      })}
    </Fragment>
  )
}

export default Searcher
