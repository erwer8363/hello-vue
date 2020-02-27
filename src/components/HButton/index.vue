<template>
    <component :is="tagName" v-bind="tagProps"
               :class="[tagName === 'button'?'style-btn':'style-a']">
        <slot></slot>
    </component>
</template>

<script>
export default {
  name: 'HButton',
  props: {
    to: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
  },
  data() {
    return {}
  },
  computed: {
    tagName() {
      return this.to === '' ? 'button' : 'a'
    },
    tagProps() {
      let props = {}
      if (this.to) {
        props = {
          target: this.target,
          href: this.to,
        }
      }
      return props
    },
  },
  mounted() {
  },
  methods: {},
}
</script>

<style lang="scss">
.style{
    &-btn{
        padding: 10px 10px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        line-height: 100%;
        outline: none;
        font-size: 30px;
    }
    &-a{
        text-decoration: none;
        padding: 2px 5px;
        font-size: 30px;
        font-weight: bold;
        color: #000;
    }
}
</style>
