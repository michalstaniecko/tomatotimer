<template>
  <div id="app" class="">
    <Header/>
    <Sessions/>
    <Timer/>
  </div>
</template>

<script>


  import Header from "@/components/Header";
  import Sessions from "@/components/Sessions";
  import Timer from "@/components/Timer";

  export default {
    name: 'App',
    data() {
      return {}
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
    },
    methods: {},
    beforeCreate() {
      if (localStorage.settings){
        const settings = JSON.parse(localStorage.getItem('settings'))
        this.$store.dispatch('updateSettings', {settings: settings})
      }

      if (!('Notification' in window)) {
        console.log('This browser does not support notifications')
      } else {
        Notification.requestPermission()
            .then((permission) => {
              this.$store.dispatch('updateNotificationPermission', permission === "granted" ? true : null)
            })
      }

    }
  }
</script>

<style lang="scss">
</style>
