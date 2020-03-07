<template>
    <div class="parent">
        <h1>父容器</h1>
        <child>
            <div class="tmp1" #up>
                <span>菜单up-1</span>
            </div>
            <div class="tmp1" #down>
                <span>菜单down-1</span>
            </div>
            <div class="tmp1">
                <span>菜单->1</span>
            </div>
        </child>
    </div>
</template>

<script>
export default {
  name: 'slotCom',
  components: {},
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


<template>
    <div class="child">
        <slot name="up"></slot>
        <h3>这里是子组件</h3>
        <slot name="down"></slot>
        <slot></slot>
    </div>
</template>
