<template>
  <div class="">
    Minutes: {{ minutes }} Seconds: {{ seconds < 10 ? `0${seconds}` : seconds }}
  </div>
</template>

<script>
  import moment from 'moment'
  import 'moment/locale/pl'
  import audio from './../audio/twin-bell-alarm-clock-ringing-short.mp3'

  moment.locale('pl')
  const dateFormat = 'dddd, MMMM Do YYYY, HH:mm:ss'

  export default {
    name: "Countdown",
    props: ['timerStatus'],
    data() {
      return {
        time: 0,
        countdownHandler: null,
        timePassed: 0,
        startTime: null
      }
    },

    watch: {
      status(value) {
        switch (value) {
          case 'start':
            this.startCountdown()
            break
          case 'stop':
            this.stopCountdown()
            break
          case 'reset':
            this.resetCountdown()
            break
        }
      },
      time() {
        this.resetCountdown()
      }
    },

    methods: {
      showNotification() {
        if (this.$store.state.settings.browserNotification) {
          const title = 'Sardynki Biznesu - Tomato Timer'
          const body = 'Twój czas minął!'
          //TODO: obsługa powiadomień na mobile
          try {
            const notification = new Notification(title, { body })
            notification.onclick = () => {
              notification.close()
              window.parent.focus()
            }
          } catch (error) {
            console.log('Powiadomienia wyłączone na mobile!')
          }

        }
      },
      playAudio() {
        if (this.$store.state.settings.volume == 0) return false
        const audio = new Audio(require('./../audio/twin-bell-alarm-clock-ringing-short.mp3'))
        audio.volume = this.$store.state.settings.volume / 100
        audio.play()
      },
      startCountdown() {
        this.countdownHandler = setInterval(this.countdownDecrease, 1000)
        this.startTime = moment().format(dateFormat)
      },
      countdownDecrease() {
        this.timer = 1
        if (this.timer === 55) {
          this.stopCountdown()
          this.$store.dispatch('setGoal', {
            startTime: this.startTime,
            endTime: moment().format(dateFormat),
            session: 'pomodoro'
          })
          this.showNotification()
          this.playAudio()
        }
      },
      stopCountdown() {
        clearInterval(this.countdownHandler)
      },
      resetCountdown() {
        this.stopCountdown()
        this.$store.commit('setTimerStatus', {
          status: 'stop'
        })
        this.timePassed = 0
      }
    },

    computed: {

      timer: {
        get() {
          this.time = this.$store.state.timers[this.$store.state.currentTimer].time * 60
          return this.time - this.timePassed
        },
        set(value) {
          this.timePassed += value
        }
      },

      status() {
        return this.$store.state.timerStatus
      },

      minutes() {
        return Math.floor(this.timer / 60)
      },

      seconds() {
        return this.timer - (this.minutes * 60)
      },

    }
  }
</script>

<style scoped>

</style>
