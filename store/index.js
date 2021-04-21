import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null
    },
    mutations: {
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      authenticateUser(vuexContext, authData) {
        let authUrl = "https://api.inohub.kz/api/auth/login"
        return this.$axios.$post(authUrl,
          {
            email: authData.email,
            password: authData.password
          })
          .then(result => {
            console.log(result.data.access_token)
            vuexContext.commit('setToken', result.data.access_token)
            localStorage.setItem('token', result.data.access_token)
            localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.data.expires_in) * 1000)
            Cookie.set('jwt', result.data.access_token)
            Cookie.set(
              'expirationDate',
              new Date().getTime() + Number.parseInt(result.data.expires_in) * 1000
            )
          })
          .catch(e => console.log(e))
      },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;

        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else if (process.client) {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        } else {
          token = null
          expirationDate = null
        }
        if (new Date().getTime() > +expirationDate || !token) {
          vuexContext.dispatch('logout')
          return;
        }
        vuexContext.commit('setToken', token)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      }
    },
    getters: {
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
