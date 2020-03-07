<template>
  <div class="about">
    <button @click="handleChange('A')">显示A组件</button>
    <button @click="handleChange('B')">显示B组件</button>
    <button @click="handleChange('C')">显示C组件</button>

    <component :is="component" :txt="msg"/>

    <div class="box">
      <div class="left">1</div>
      <div class="content">3</div>
      <div class="right">2</div>
    </div>

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
      msg: 'hello world',
      newMsg: '',
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
<style scoped lang="scss">
  .about{
    /*.box{*/
    /*  min-height: 100px;*/
    /*  .left{*/
    /*    float: left;*/
    /*    width: 200px;*/
    /*    background: red;*/
    /*  }*/
    /*  .content{*/
    /*    background: yellow;*/
    /*    height: 200px;*/
    /*    margin: 0 100px;*/
    /*  }*/
    /*  .right{*/
    /*    float: right;*/
    /*    width: 100px;*/
    /*    background: blue;*/
    /*  }*/
    /*}*/
    .box{
      display: flex;
      min-height: 100px;
      .left{
        width: 100px;
        background: red;
      }
      .content{
        flex: 1;
        background: yellow;
      }
      .right{
        width: 100px;
        background: blue;
      }
    }
  }
</style>
