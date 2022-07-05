const state = {
  list: []
}
const mutations = {
  SET_ABOUT_List(state, name) {
    state.list = name
  }
}
const actions = {
  // 设置name
  aboutList({ commit }, name) {
    commit('SET_ABOUT_List', name)
  }
}
export default {
  state,
  mutations,
  actions
}
