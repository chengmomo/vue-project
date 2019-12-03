import * as types from './mutation-types'

export default {
  [types.UPDATE_INFO] (state) {
    // mutate state
  },
  setHeaderCurRouter (state, headerCurRouter) {
    state.headerCurRouter = headerCurRouter
  }
}
