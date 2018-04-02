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
          change () {
            emit(vnode, 'pressureChange', arguments)
          },
          start () {
            emit(vnode, 'pressureStart', arguments)
          },
          end () {
            emit(vnode, 'pressureEnd', arguments)
          },
          startDeepPress () {
            emit(vnode, 'pressureDeepStart', arguments)
          },
          endDeepPress () {
            emit(vnode, 'pressureDeepEnd', arguments)
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
