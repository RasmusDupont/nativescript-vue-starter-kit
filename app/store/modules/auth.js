import AuthService from '../../services/auth'

const appSettings = require("tns-core-modules/application-settings");

let pastState = appSettings.getString("AUTH-TOKEN") || {}

const state = {
  loggedIn: false,
  token: pastState || null
}

//mutation = only cares about state, synch
const mutations = {
  REMOVE_AUTH(state) {
    state.loggedIn = false
    appSettings.remove("AUTH-TOKEN")
  },
  SET_AUTH(state, token) {
    state.loggedIn = true
    state.token = token
    appSettings.setString("AUTH-TOKEN", token)
  },
}

const getters = {
  loggedIn: state => {
    return !!state.token
  },
  token: state => {
    return state.token
  }
}

//action = business logic, can be asynch
const actions = {
  logout(store) {
    store.commit('REMOVE_AUTH')
  },
  async login(store, user) {  
    try {
      const token = await AuthService.authenticate(user)
      store.commit('SET_AUTH', token)
    } catch {
      throw new Error("Auth error")
    }
  },
  async loginWithFacebook(store, token) {
    try {
      store.commit('SET_AUTH', token)
    } catch {
      throw new Error("Auth error")
    }
  },
  async register(store, user) {
    try {
      const token = await AuthService.register(user)
      store.commit('SET_AUTH', token)
    } catch {
      throw new Error("Register error")
    }
  },
  //use getters for the token here
  async init ({ commit }) {
    let authString = appSettings.getString("AUTH-INFO");
    
    if (authString) {
      console.log("USER LOGGED IN", authString)
      let userLoginData = { email: authString };
      commit("login", { userLoginData });

      return Promise.resolve({ userLoginData });
    } else {
      console.log("NO AUTH-INFO")
      return Promise.resolve();
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}