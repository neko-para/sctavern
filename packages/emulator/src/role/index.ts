import { RoleKey } from '@sctavern/data'
import { RoleImpl } from '../types'

export function CreateRoleTable(): Record<'白板', RoleImpl> {
  return {
    白板: {
      listener: {},
    },
  }
}

const t = CreateRoleTable() as Record<RoleKey, RoleImpl>

export default t
