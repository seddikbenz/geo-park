import {dispatch} from '@rematch/core'
import {Animated} from 'react-native-web'
import * as api from "../api";
export default {
  state: {
    loading: true,
    login: false,
    sidebar: true,
    sidebarWidth: new Animated.Value(0),
    navbar: false
  },
  reducers: {
    toggleLoading: (state) => {
      return {...state, loading: !state.loading}
    },
    toggleLogin: (state) => {
      return {...state, login: !state.login}
    },
    toggleSidebar: (state) => {
      if(state.sidebarWidth._value === 0){
        Animated.spring(state.sidebarWidth, { toValue: -250 }).start();
        return {...state, sidebar: true}
      }else{
        Animated.spring(state.sidebarWidth, { toValue: 0 }).start();
        return {...state, sidebar: false}
      }
    },
    toggleNavbar: (state) => {
      return {...state, navbar: !state.navbar}
    }
  },
  effects: {
    fetchUser: (rootState) => {
      api.fetchUser().then((res) => {
          dispatch.auth.setUser(res.data.user)
          dispatch.app.toggleLoading()
          dispatch.app.toggleLogin()
        }
      ).catch((err) => {
     //     console.dir(err.response)
          dispatch.app.toggleLoading()
        }
      )
    }
  }
}