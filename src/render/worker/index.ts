
import { v4 as uuidv4 } from 'uuid'
import cEmitter from './cEmitter'
import worker from './worker'

const send = (method: string, query?: any) => {
  return new Promise(resolve => {
    const type = uuidv4()

    cEmitter.once(type, body => {
      resolve(body)
    })

    worker.postMessage({ method, query, type })
  })
}

export default {
  send
}
