import axios from 'axios'
const state = () => {
  return {
    allData: {
      transaction: []
    }
  }
}
const getters = {
  getDetailTransaksi (state) {
    return state.allData
  }
}
const mutations = {
  SET_DETAIL_TRANSACTION (state, payload) {
    state.allData.transaction = payload
  }
}
const actions = {
  insertTransaction (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/api/transaction/insert', payload)
        .then((result) => {
          resolve(result.data.message)
          localStorage.setItem('id_transaction', result.data.data.insertId)
        }).catch((err) => {
          console.log(err.message)
        })
    })
  },
  detailTransaksi (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/api/transaction/getDetail/${payload}`)
        .then((result) => {
          context.commit('SET_DETAIL_TRANSACTION', result.data)
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
