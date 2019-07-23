import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    status: '',
    profile: {},
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
        state.status = 'loading'
      },
      registration_success(state){
        state.status = 'registred'
      },
      auth_success(state, token, user) {
        state.status = 'success'
        state.token = token
        state.user = user
      },
      auth_error(state) {
        state.status = 'error'
      },
      logout(state) {
        state.status = ''
        state.token = ''
      },
      set_profile(state,data){
        state.profile=data
      },
  },
  actions: {
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({ url: 'http://localhost:3000/login', data: user, method: 'POST' })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
              // Add the following line:
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
        })
      },
      register({ commit }, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({ url: 'http://localhost:3000/register', data: user, method: 'POST' })
            .then(resp => {
              commit('registration_success')
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error', err)
              reject(err)
            })
        })
      },
      logout({ commit }) {
        return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      },
      fetchProfile({ commit }){
        return new Promise((resolve,reject)=>{
          axios({url:'http://localhost:3000/profile', method: 'GET'})
          .then((resp)=>{
            commit("set_profile",resp.data)
          })
        })
      },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})