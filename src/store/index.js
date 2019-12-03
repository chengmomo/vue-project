import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import menu from './modules/menu'
import content from './modules/content'

const debug = process.env.NODE_ENV === 'development'

Vue.use(Vuex)
let modules = {}
let moduleList = require.context('@/store', true, /.module.js$/)
moduleList &&
moduleList.keys().forEach(key => {
  Object.assign(modules, moduleList(key))
})
Object.assign(modules, {
  menu,
  content
})
console.log(modules, 'modules')
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  strict: debug
})
