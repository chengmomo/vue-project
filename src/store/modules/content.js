import * as types from '../mutation-types'

const state = {
  loading: null,
  current: '',
  user: {},
  tenants: []
}

const actions = {
  loadStart({ commit }) {
    commit(types.CONTAINER_LOAD_START)
  },
  loadEnd({ commit }, data) {
    commit(types.CONTAINER_LOAD_END, data)
  },
  setUser({ commit }, data) {
    commit(types.CONTAINER_SET_USER, data.data)
  },
  setTenant({ commit }, data) {
    commit(types.CONTAINER_SET_TENANT, data)
  }
}

const mutations = {
  [types.CONTAINER_LOAD_START](state) {
    state.loading = true
  },
  [types.CONTAINER_LOAD_END](state, data) {
    state.loading = false
    state.current = data.current
  },
  [types.CONTAINER_SET_USER](state, data) {
    state.user = {
      realName: data.realName,
      userId: data.userId,
      userName: data.userName,
      auth: data.auth,
      currentTenantId: data.currentTenantId
    }
    state.tenants = data.tenants
  },
  [types.CONTAINER_SET_TENANT](state, data) {
    state.tenants = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
