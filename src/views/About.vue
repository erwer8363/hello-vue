<template>
  <div class="about">
    <button @click="handleChange('A')">显示A组件</button>
    <button @click="handleChange('B')">显示B组件</button>
    <button @click="handleChange('C')">显示C组件</button>

    <component :is="component"/>
  </div>
</template>
<script>
import componentA from '@/components/a/a'
import componentB from '@/components/b/b'
import componentC from '@/components/c/c'

export default {
  data() {
    return {
      component: componentA,
    }
  },
  methods: {
    handleChange(component) {
      if (component === 'A') {
        this.component = componentA
      } else if (component === 'B') {
        this.component = componentB
      } else if (component === 'C') {
        this.component = componentC
      }
    },
  },
}
</script>
