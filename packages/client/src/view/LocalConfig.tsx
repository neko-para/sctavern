import GameConfig from '@/components/GameConfig'

export interface Props {
  instance: typeof GameConfig
}

function LocalConfig(props: Props) {
  return <props.instance></props.instance>
}

export default LocalConfig
