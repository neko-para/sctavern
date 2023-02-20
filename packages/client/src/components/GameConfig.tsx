import Button from '@material-ui/core/Button'
import CardView from '@material-ui/core/Card'
import Input from '@/ui/Input'
import {
  PresetPoolPack,
  PvpPresetActivePack,
  PvpPresetActiveUnit,
} from '@sctavern/data'
import type { GameConfig } from '@sctavern/emulator'
import { useState } from 'react'

function GameConfig() {
  const [config, setConfig] = useState<GameConfig>({
    Pack: [],
    Seed: Math.floor(Math.random() * 1000000),
    Role: ['白板'],
    Mutation: [],
    Pve: false,
    PoolPack: PresetPoolPack,
    ActivePack: PvpPresetActivePack,
    ActiveUnit: PvpPresetActiveUnit,
  })

  return (
    <CardView>
      <div className="InfoCard flex-column">
        <div className="flex gap">
          <Input
            class={['flex-4']}
            type="number"
            value={config.Seed.toString()}
            setValue={v => {
              setConfig({
                ...config,
                Seed: Math.floor(Number(v) ?? 1),
              })
            }}
          ></Input>
          <Button
            // class={['flex-1']}
            onClick={() => {
              setConfig({
                ...config,
                Seed: Math.floor(Math.random() * 1000000),
              })
            }}
          >
            随机
          </Button>
        </div>
      </div>
    </CardView>
  )
}

export default GameConfig
