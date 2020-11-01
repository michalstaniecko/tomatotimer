<template>
  <div id="app" class="">
    <Header/>
    <Sessions />
    <Timer />
  </div>
</template>

<script>


import Header from "@/components/Header";
import Sessions from "@/components/Sessions";
import Timer from "@/components/Timer";
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Timer,
    Sessions,
    Header

  },
  computed: {
    time() {
      return this.$store.state.timers.pomodoro.time
    }
  }
}
</script>

<style lang="scss">
</style>
