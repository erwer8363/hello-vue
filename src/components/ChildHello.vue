<template>
<div>这里是hello的子组件</div>
</template>

<script>
export default {
  name: 'ChildHello',
  components: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.$on('on-message', this.showMessage)
  },
  methods: {
    showMessage(text) {
      window.alert(text)
    },
  },
}
</script>

<style scoped lang="scss">

</style>
