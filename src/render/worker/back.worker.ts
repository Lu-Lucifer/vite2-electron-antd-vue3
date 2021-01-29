
interface Data {
  method: string,
  query: any,
  type: symbol
}

interface MethodMap {
  [propName: string]: any
}

const methodMap: MethodMap = {
  async ping(type: symbol) {
    // @ts-ignore
    self.postMessage({
      body: {
        code: 0,
        message: '',
        data: ' pong'
      },
      type
    })
  }
}

self.onmessage = (evt: { data: Data }) => {
  const { method, query, type } = evt.data
  methodMap[method] && methodMap[method](type, query).catch((err: {
    status: any; code: any; message: any
  }) => {
    // @ts-ignore
    self.postMessage({
      body: {
        code: err.status || err.code || 999,
        message: err.message || '未处理错误'
      },
      type
    })
  })
}
