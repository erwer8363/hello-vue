<template>
  <div class="home">
    <h-button>普通按钮</h-button>
    <h-button to="https://juejin.im" target="_blank">链接按钮</h-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'components/HelloWorld'
import HButton from 'components/HButton/index'

export default {
  name: 'home',
  components: {
    HButton,
    HelloWorld,
  },
}
</script>
