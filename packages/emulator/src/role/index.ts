import { RoleKey } from '@sctavern/data'
import { RoleImpl } from '../types'

export function CreateRoleTable(): Record<'白板', RoleImpl> {
  const res: Record<'白板', Partial<RoleImpl>> = {
    白板: {
      listener: {},
    },
  }
  for (const r in res) {
    const impl = res[r as keyof typeof res]
    impl.listener = impl.listener || {}
    impl.buy_cost = impl.buy_cost || (() => 3)
    impl.bought = impl.bought || (() => void 0)
    impl.refresh_cost = impl.refresh_cost || (() => 1)
    impl.refreshed = impl.refreshed || (() => void 0)
    impl.ability = impl.ability || (() => void 0)
  }
  return res as ReturnType<typeof CreateRoleTable>
}

const t = CreateRoleTable() as Record<RoleKey, RoleImpl>

export default t
