<!--递归组件:组件在他的模板内内可以递归的调用自己,只要给组件设置name组件就可以了-->
<template>
<div v-for="(item,index) in treeArr">
    {{index}}
    <tree :item="item.arr" v-if="item.flag"></tree>
</div>
</template>

<script>
export default {
  name: 'tree',
  components: {},
  data() {
    return {}
  },
  props: {
    item: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">

</style>
