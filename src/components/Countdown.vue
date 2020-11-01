<template>
  <div class="">
    Minutes: {{ minutes }} Seconds: {{ seconds < 10 ? `0${seconds}` : seconds }}
  </div>
</template>

<script>
export default {
  name: "Countdown",
  props: ['timerStatus'],
  data() {
    return {
      time: 0,
      countdownHandler: null,
      timePassed: 0
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
    startCountdown() {
      this.countdownHandler = setInterval(this.countdownDecrease, 1000)
    },
    countdownDecrease() {
      this.timer = 1
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
