import GameConfig from '@/components/GameConfig'
import { useNavigate } from 'react-router'

function LocalConfig() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="sm">
      <CardView>
        <GameConfig
          local={true}
          trigger={config => {
            navigate(
              '/local/play?' +
                new URLSearchParams({
                  config: JSON.stringify(config),
                })
            )
          }}
        ></GameConfig>
      </CardView>
    </Container>
  )
}

export default LocalConfig
