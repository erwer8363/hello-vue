<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      app: this,
    }
  },
  data() {
    return {
      userInfo: '我是一个兵,来自老百姓',
    }
  },
  methods: {
    getUserInfo() {
      this.userInfo = '这里模拟接收数据'
    },
  },
  mounted() {
    // this.getUserInfo()
    console.log(this)
  },
}
</script>
<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
