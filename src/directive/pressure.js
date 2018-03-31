import Pressure from 'pressure'

export default {
  install (Vue, config) {
    if (config) {
      Pressure.config(config)
    }
    // 注册
    Vue.directive('pressure', {
      bind (el, {value: opt}) {
        Pressure.set(el, opt, opt.options)
      }
    })
    let directiveList = ['start', 'end', 'startDeepPress', 'endDeepPress', 'change']
    for (let direct of directiveList) {
      Vue.directive(`pressure-${direct}`, {
        bind (el, {value: callback}) {
          Pressure.set(el, {
            [direct]: callback
          })
        }
      })
    }
  }
}
