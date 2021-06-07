import Cookie from "js-cookie";

export default function ({$axios, store}, inject) {
  const api = $axios.create()

  api.setBaseURL(process.env.API_URL)

  if (process.browser) {
    const token = localStorage.getItem('token')
    api.setToken(token, 'Bearer')
  }
  api.onResponse((response) => {
    if (response.status === 404 || response.status === 401) {
      console.log('not found auth failed at least handled')
    }
  })

  inject('api', api)
}
