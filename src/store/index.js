import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imgUrl:
          "https://cdn.pixabay.com/photo/2018/11/30/16/06/new-york-3848059_960_720.jpg",
        id: '1',
        title: "meet in new work",
        date: '25-5-2020'
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
        id: '2',
        title: "meet in paris",
        date: '20-2-2020'
      }
    ],
    user: {
      id: 111,
      registerdMeetup: ['1']
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return (meetupId) => state.loadedMeetups.find(meetup => meetup.id === meetupId)
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      if (payload) {
        const meetup = {
          title: payload.title,
          imgUrl: payload.ImgURL,
          location: payload.location,
          description: payload.descrip,
          date:payload.date
        }
      }
      commit('createMeetup', meetup)
    }
  },
  modules: {
  }
})
