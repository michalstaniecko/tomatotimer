<template>
  <div>
    <div class="btn-group">
      <a href="#" class="btn btn-dark"
         @click.prevent="logsShow = !logsShow"
      >Log</a>
      <a href="#" class="btn btn-dark">FAQ</a>
      <a href="#"
         class="btn btn-dark"
         @click.prevent="settingsShow = !settingsShow"
      >Settings</a>
    </div>
    <Settings :settings-show.sync="settingsShow"/>
    <Logs :logs-show.sync="logsShow"/>
  </div>
</template>

<script>
import Settings from "@/components/Settings";
import Logs from "@/components/Logs";

export default {
  name: "Menu",
  components: {Settings, Logs},
  data() {
    return {
      settingsShow: false,
      logsShow: false
    }
  }
}
</script>

<style scoped>

</style>
