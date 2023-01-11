import { v4 as uuidv4 } from 'uuid'

export function setId(obj) {
  if (typeof obj === 'object' && obj) {
    if (obj instanceof Array) {
      obj.forEach(setId)
    } else {
      if ('$id$' in obj) {
        return
      }
      obj['$id$'] = uuidv4()
      for (const k in obj) {
        setId(obj[k])
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
        cleanId(obj[k])
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
        if (k.startsWith('$ref$')) {
          obj[k] = obj[k]['$id$']
        } else {
          remRef(obj[k])
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
        remId(obj[k], st)
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
        if (k.startsWith('$ref$')) {
          obj[k] = st[obj[k]]
        } else {
          setRef(obj[k], st)
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
