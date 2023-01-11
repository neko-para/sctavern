export function Dispatch(target, msg, self, extra) {
  target[msg.msg]?.call(self, msg, extra)
}
