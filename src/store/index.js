import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const path = require('path')

const modulesFiles = require.context('./modules', false, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = path.basename(modulePath, '.js')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default || value
  return modules
}, {})

export default new Vuex.Store({
  modules,
})
