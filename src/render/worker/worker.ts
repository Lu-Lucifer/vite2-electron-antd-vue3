
// @ts-ignore
import Worker from './back.worker?worker'
import cEmitter from './cEmitter'

const worker = new Worker()

// 前台: 后台 -> 前台
worker.onmessage = (event: { data: { type: symbol; body: any } }) => {
  const { type, body } = event.data
  cEmitter.emit(type, body)
}

export default worker
