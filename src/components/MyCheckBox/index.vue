<template>
<div>
    {{value}}-{{checked}}
</div>
</template>

<script>
export default {
  name: 'MyCheckBox',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    value: String,
    checked: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
  },
  methods: {},
}
</script>

<style scoped lang="scss">

</style>
