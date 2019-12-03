import * as types from '../mutation-types'

const state = {
  data: []
}

const actions = {
  setData({ commit }, data) {
    commit(types.MENU_SET_DATA, data.data)
  }
}

const mutations = {
  [types.MENU_SET_DATA](state, data) {
    state.data = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
