import {dispatch} from '@rematch/core'
import * as api from "../api";

export default {
  state: {
    user: {
      id: 0,
      name: '',
      email: '',
      is_admin:0,
      created_at: '',
      updated_at: '',
    }
  },
  reducers: {
    setUser: (state, user) => { return {...state, user} }
  },
  effects: {
    login: ({email, password}, rootState) => {
      dispatch.app.toggleLoading()
      api.login(email, password).then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch.auth.setUser(res.data.user)
        dispatch.app.toggleLogin()
        dispatch.app.toggleLoading()
      }).catch((err) => {
        dispatch.app.toggleLoading()
        alert(JSON.stringify(err))
      });
    },
    register: ({email, password, name}, rootState) => {
      dispatch.app.toggleLoading()
      api.register(email, password, name).then((res) => {
        dispatch.app.toggleLoading()
        alert(res.data.message)
      }).catch((err) => {
        dispatch.app.toggleLoading()
        alert(JSON.stringify(err.response.data.error))
      });
    },
    logout: (rootState) => {
      dispatch.app.toggleLoading()
      api.logout().then((res) => {
        api.setAuthorizationToken(null)
        dispatch.app.toggleLoading()
        dispatch.app.toggleLogin()
      }).catch((err) => {
        console.log(err)
        alert(JSON.stringify(err))
        dispatch.app.toggleLoading()
      })
    }
  }
};
