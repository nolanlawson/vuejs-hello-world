import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export function createStore () {
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

  return store
}
