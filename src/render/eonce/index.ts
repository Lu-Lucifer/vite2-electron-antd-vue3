
/**
 * eonce: 快速处理一次性的订阅发布场景 (阅后即焚).
 */

export type EventType = string | symbol;

// 事件处理函数采用可选的事件参数，不返回值
export type Handler<T = any> = (event?: T) => void

export type EventHandlerMap = Map<EventType, Handler>

export interface Eonce {
  all: EventHandlerMap

  once<T = any>(type: EventType, handler: Handler<T>): void

  emit<T = any>(type: EventType, event?: T): void
}

export default function eonce(): Eonce {
  const all = new Map()

  return {
    all,
    /**
     * Register an event handler for the given type.
     * @param {Function} handler Function to call in response to given event
     * @returns {EventType} The event type
     * @memberOf eonce
     */
    once<T = any>(type: EventType, handler: Handler<T>) {
      all.set(type, handler)
    },
    /**
     * Invoke handler for the given type.
     *
     * @param {EventType} type The event type to invoke
     * @param {Any} event Any value (object is recommended and powerful), passed to each handler
     * @memberOf eonce
     */
    emit<T = any>(type: EventType, event?: T) {
      if (!all.has(type)) return
      const handler: Handler<T> = all.get(type)
      handler(event)
      all.delete(type)
    }
  }
}
