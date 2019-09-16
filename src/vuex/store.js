import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

// 同步操作修改state,调用mutations
const mutations = {
  // 传递参数
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

// 异步操作修改state，调用actions
const actions = {
  addAction (context) {
    context.commit('add', 10)
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}
const getters = {
  count (state) {
    return state.count++
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
