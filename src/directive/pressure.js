import Pressure from 'pressure'

let emit = (vnode, name, data) => {
  let handlers = vnode.data.on

  if (handlers && handlers.hasOwnProperty(name)) {
    let handler = handlers[name]
    let fn = handler.fns || handler.fn

    if (typeof fn === 'function') {
      fn(data)
    }
  }
}

export default {
  install (Vue, config) {
    if (config) {
      Pressure.config(config)
    }
    // 注册
    Vue.directive('pressure', {
      bind (el, {value: opt}, vnode, oldVnode) {
        // ['start', 'end', 'startDeepPress', 'endDeepPress', 'change']
        Pressure.set(el, {
          change (force, event) {
            event.force = force
            emit(vnode, 'pressureChange', event)
          },
          start (event) {
            emit(vnode, 'pressureStart', event)
          },
          end () {
            emit(vnode, 'pressureEnd')
          },
          startDeepPress (event) {
            emit(vnode, 'pressureDeepStart', event)
          },
          endDeepPress () {
            emit(vnode, 'pressureDeepEnd')
          },
          unsupported () {
            emit(vnode, 'pressureUnsupported')
          }
        }, opt)
      }
    })
    Vue.prototype.$pressure = Pressure
  },
  pressure: Pressure
}
