export function setId(obj, counter = { id: 0 }) {
  if (typeof obj === 'object' && obj) {
    if (obj instanceof Array) {
      obj.forEach(v => setId(v, counter))
    } else {
      if ('$id$' in obj) {
        return
      }
      obj['$id$'] = counter.id
      counter.id += 1
      for (const k in obj) {
        if (!k.startsWith('$ignore$')) {
          setId(obj[k], counter)
        }
      }
    }
  }
}

export function cleanId(obj) {
  if (typeof obj === 'object' && obj) {
    if (obj instanceof Array) {
      obj.forEach(cleanId)
    } else {
      if (!('$id$' in obj)) {
        return
      }
      delete obj['$id$']
      for (const k in obj) {
        if (!k.startsWith('$ignore$')) {
          cleanId(obj[k])
        }
      }
    }
  }
}

export function remRef(obj) {
  if (typeof obj === 'object' && obj) {
    if (obj instanceof Array) {
      obj.forEach(remRef)
    } else {
      for (const k in obj) {
        if (!k.startsWith('$ignore$')) {
          if (k.startsWith('$ref$')) {
            obj[k] = obj[k]['$id$']
          } else {
            remRef(obj[k])
          }
        }
      }
    }
  }
}

export function remId(obj, st) {
  if (typeof obj === 'object' && obj) {
    if (obj instanceof Array) {
      obj.forEach(v => remId(v, st))
    } else {
      st[obj['$id$']] = obj
      delete obj['$id$']
      for (const k in obj) {
        if (!k.startsWith('$ignore$')) {
          remId(obj[k], st)
        }
      }
    }
  }
}

export function setRef(obj, st) {
  if (typeof obj === 'object' && obj) {
    if (obj instanceof Array) {
      obj.forEach(v => setRef(v, st))
    } else {
      for (const k in obj) {
        if (!k.startsWith('$ignore$')) {
          if (k.startsWith('$ref$')) {
            obj[k] = st[obj[k]]
          } else {
            setRef(obj[k], st)
          }
        }
      }
    }
  }
}

export function prevSerialize(obj) {
  setId(obj)
}

export function postSerialize(obj) {
  cleanId(obj)
}

export function postDeserialize(obj) {
  const st = {}
  remId(obj, st)
  setRef(obj, st)
}
