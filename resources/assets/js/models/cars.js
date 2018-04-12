import {dispatch} from '@rematch/core'
// import * as api from "../api";

export default {
  state: {
    cars: [],
    car: {

    }
  },
  reducers: {
    setUser: (state, user) => { return {...state, user} }
  },
  effects: {
    fetchCars: (rootState) => {
      dispatch.app.toggleLoading()
    },
    fetchCar: ({email, password, name}, rootState) => {
      dispatch.app.toggleLoading()
    },
  }
};
