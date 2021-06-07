import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: process.browser ? localStorage.getItem('token') : '',
      loadedStartups: [],
      loadedCategories: [],
      loadedCourses: [],
      testScore: 0,
      testTotal: 0,
      testSuccess: 0,
      user: {}
    },
    mutations: {
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      },
      setStartups(state, info) {
        state.loadedStartups = info
      },
      setCategories(state, info) {
        state.loadedCategories = info
      },
      setCourses(state, info) {
        state.loadedCourses = info
      },
      setUser(state, info) {
        state.user = info;
      },
      clearUser(state, info) {
        state.user = {};
      }
    },
    actions: {
      async nuxtServerInit(VuexContext, context) {
        const startupsResponses = await context.$axios.get(process.env.API_URL + 'startups?relation[category]&search[status]=exact|3')
        VuexContext.commit('setStartups', startupsResponses.data.data.data)

        const categoryResponses = await context.$axios.get(process.env.API_URL + 'categories')
        VuexContext.commit('setCategories', categoryResponses.data.data.data)

        const coursesResponses = await context.$axios.get(process.env.API_URL + 'courses')
        VuexContext.commit('setCourses', coursesResponses.data.data.data)
      },

      setStartups(vuexContext, info) {
        vuexContext.commit('setStartups', info)
      },

      setCategories(vuexContext, info) {
        vuexContext.commit('setCategories', info)
      },

      setCourses(vuexContext, info) {
        vuexContext.commit('setCourses', info)
      },

      authenticateUser(vuexContext, authData) {
        let authUrl = process.env.API_URL + "auth/login"
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
        // return state.token === null
        return state.token ? true : false;
      },

      loadedStartups(state) {
        return state.loadedStartups
      },

      loadedCategories(state) {
        return state.loadedCategories
      },

      loadedCourses(state) {
        return state.loadedCourses
      },
      getTestScore(state) {
        return state.testScore
      },
      getTestTotal(state) {
        return state.testTotal
      },
      getTestSuccess(state) {
        return state.testSuccess
      }
    }
  })
}

export default createStore
