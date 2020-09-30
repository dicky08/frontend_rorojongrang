import axios from 'axios'

const actions = {
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/api/users/register', payload).then((response) => {
        resolve(response.data.message)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  actions
}
