function broadcast(componentName, eventName, params) {
  this.$children.forEach((child) => {
    const {name} = child.$options
    if (name === componentName) {
      Reflect.apply(child.$emit, child, [eventName].concat(params))
      // child.$emit.apply(child, [eventName].concat(params))
    } else {
      Reflect.apply(broadcast, child, [componentName, eventName].concat([params]))
      // broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let {name} = parent.$options
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        Reflect.apply(parent.$emit, parent, [eventName].concat(params))
        // parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast(componentName, eventName, params) {
      Reflect.apply(broadcast, this, [componentName, eventName].concat(params))
      // broadcast.call(this, componentName, eventName, params)
    },
  },
}
