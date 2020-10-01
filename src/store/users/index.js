import axios from 'axios'
const id = localStorage.getItem('id')
const state = () => {
  return {
    allData: {
      users: []
    },
    detail: {}
  }
}
const getters = {
  getAllusers (state) {
    return state.allData
  }
}
const mutations = {
  SET_DATA_USERS (state, payload) {
    state.allData.users = payload
  },
  set_detail_user (state, payload) {
    // console.log(state.detail)
    state.detail = payload
  }
}
const actions = {
  // getAllUsers (context, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('http://localhost:3000/api/users/getall')
  //       .then((result) => {
  //         console.log(result)
  //         context.commit('SET_DATA_USERS', result.data)
  //         console.log(result.data)
  //       }).catch((err) => {
  //         console.log(err.message)
  //       })
  //   })
  // },
  getDetail ({ commit }, result) {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/api/users/getDetail/${id}`).then(dt => {
        commit('set_detail_user', dt.data.data[0])
      })
    })
  },
  updateuser ({ commit }, result) {
    return new Promise((resolve, reject) => {
      axios.put(`http://localhost:3000/api/users/update/${id}`, result).then(dt => {
        resolve(dt.data.message)
      }).catch(err => {
        reject(err)
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
