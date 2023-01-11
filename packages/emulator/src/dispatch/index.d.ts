import type { GenericListener, InnerMsg, SpecificListener } from '../events'

export function Dispatch<ThisType>(
  target: GenericListener<ThisType>,
  msg: InnerMsg,
  self: ThisType
): void

export function Dispatch<ThisType, ExtraType>(
  target: SpecificListener<ThisType, ExtraType>,
  msg: InnerMsg,
  self: ThisType,
  extra: ExtraType
): void
