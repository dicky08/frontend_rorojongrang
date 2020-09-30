import axios from 'axios'
const state = () => {
  return {
    allData: {
      findtiket: [],
      is_loading: false
    }
  }
}
const getters = {
  getAllTiket (state) {
    return state.allData
  }
}
const mutations = {
  SET_DATA (state, payload) {
    state.allData.findtiket = payload
  }
}
const actions = {
  getAllTicket (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/airlines/getall')
        .then((result) => {
          context.commit('SET_DATA', result.data)
          console.log(result.data)
        }).catch((err) => {
          console.log(err.message)
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
