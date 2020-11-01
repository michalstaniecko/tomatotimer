<template>
  <div class="container-fluid py-3">
    <div class="row justify-content-center">
      <div class="col-auto">
        <b-button variant="primary" :pressed="$store.state.currentTimer === 'pomodoro'" @click.prevent="setTimer('pomodoro')">Pomodoro</b-button>
      </div>
      <div class="col-auto">
        <b-button variant="primary" :pressed="$store.state.currentTimer === 'short_break'" @click.prevent="setTimer('short_break')">Short Break</b-button>
      </div>
      <div class="col-auto">
        <b-button variant="primary" :pressed="$store.state.currentTimer === 'long_break'" @click.prevent="setTimer('long_break')">Long Break</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sessions",

  data() {
    return {
      currentTimer: this.$store.state.currentTimer
    }
  },

  methods: {
    setTimer(type) {
      this.$store.commit('setCurrentTimer', {
        type: type
      })
    }
  }
}
</script>

<style scoped>

</style>
