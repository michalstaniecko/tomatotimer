import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timers: {
      pomodoro: {
        time: 1,
        session: 'pomodoro'
      },
      short_break: {
        time: 1,
        session: 'short_break'
      },
      long_break: {
        time: 1,
        session: 'long_break'
      }
    },
    currentTimer: 'pomodoro',
    timerStatus: 'stop',
    currentLog: {

    },
    settings: {
      timerIndicationInTitle: true,
      browserNotification: null,
      autoStartPomodorosAndBreaks: false,
      goals: 1,
      sound: 2,
      volume: 50,
      times: {
        pomodoro: 5,
        short_break: 1,
        long_break: 2
      }
    },
    goals: []
  },
  mutations: {
    setCurrentTimer(state, payload) {
      state.currentTimer = payload.type
    },
    setTimerStatus(state, payload) {
      state.timerStatus = payload.status
    },
    setSettings(state, payload) {
      state.settings = payload.settings
    },
    updateTimers(state) {
      state.timers.pomodoro.time = state.settings.times.pomodoro
      state.timers.short_break.time = state.settings.times.short_break
      state.timers.long_break.time = state.settings.times.long_break
    },
    setGoal(state, payload) {
      state.goals.push({
        session: payload.session,
        startTime: payload.startTime,
        endTime: payload.endTime
      })
      console.log(state.goals)
    },
    updateGoal(state, payload) {

    }
  },
  actions: {
    updateSettings({commit, state}, payload) {
      return new Promise(((resolve, reject) => {
        commit('setSettings', payload)
        commit('updateTimers')
        resolve('updateSettings')
      }))
    },
    setGoal({commit, state}, payload) {
      commit('setGoal', payload)
    },
    updateNotificationPermission({commit, state}, payload) {
      state.settings.browserNotification = payload
    }
  },
  modules: {
  }
})
