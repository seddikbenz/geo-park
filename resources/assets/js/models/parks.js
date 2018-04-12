import {dispatch} from '@rematch/core'
// import * as api from "../api";

export default {
  state: {
    cars: [],
    park: {

    }
  },
  reducers: {
    setPark: (state, park) => { return {...state, park} }
  },
  effects: {
    fetchParks: (rootState) => {
      dispatch.app.toggleLoading()
    },
    fetchPark: ({id}, rootState) => {
      dispatch.app.toggleLoading()
    },
  }
};
