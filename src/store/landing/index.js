import axios from 'axios'

const state = () => {
  return {
    dataAirlines: {
      search_ticket: [],
      is_loading: false
    },
    getFlight: {},
    depCity: {
      departure_city: []
    },
    desCity: {
      destination_city: []
    },
    class: {
      name_class: []
    }
  }
}

const getters = {
  getDataAirlines (state) {
    return state.dataAirlines
  },
  getDepartureCity (state) {
    return state.depCity
  },
  getDestinationCity (state) {
    return state.desCity
  },
  getClass (state) {
    return state.class
  },
  getSearch (state) {
    return state.getFlight
  }
}

const mutations = {
  SET_DATA (state, payload) {
    state.dataAirlines = payload
  },
  GET_DEPT_CITY (state, payload) {
    state.depCity = payload
  },
  GET_DEST_CITY (state, payload) {
    state.desCity = payload
  },
  GET_CLASS (state, payload) {
    state.class = payload
  },
  GET_FLIGHT (state, payload) {
    state.getFlight = payload
    console.log(state.getFlight)
  }
}

const actions = {
  getData (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/airlines/getall').then((response) => {
        context.commit('SET_DATA', response.data.data)
        resolve()
      })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getDepCity (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/departure_city/getall').then((response) => {
        context.commit('GET_DEPT_CITY', response.data.data)
        resolve()
      })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getDestCity (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/destination_city/getall').then((response) => {
        context.commit('GET_DEST_CITY', response.data.data)
        resolve()
      })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getClass (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/airlines_class/getall').then((response) => {
        context.commit('GET_CLASS', response.data.data)
        resolve()
      })
        .catch((err) => {
          reject(err)
        })
    })
  },
  searchFlight (context, data) {
    context.commit('GET_FLIGHT', data)
    const searchData = JSON.stringify(data)
    console.log(searchData)
    localStorage.setItem('search', searchData)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
