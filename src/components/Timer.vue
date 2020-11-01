<template>
  <div class="container-fluid ">
    <div class="row py-3">
      <div class="col-auto mx-auto">
        <Countdown />
      </div>
    </div>
    <div class="row justify-content-center py-3">
      <div class="col-auto">
        <b-button variant="success" @click.prevent="setTimerStatus('start')">Start</b-button>
      </div>
      <div class="col-auto">
        <b-button variant="danger" @click.prevent="setTimerStatus('stop')">Stop</b-button>
      </div>
      <div class="col-auto">
        <b-button variant="secondary" @click.prevent="setTimerStatus('reset')">Reset</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Countdown";
export default {
  name: "Timer",
  components: {Countdown},
  data() {
    return {
      timerStatus: 'stop',
    }
  },
  methods: {
    setTimerStatus(status) {
      this.$store.commit('setTimerStatus', {
        status: status
      })
    }
  },
}
</script>

<style scoped>

</style>
