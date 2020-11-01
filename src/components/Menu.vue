<template>
  <div>
    <div class="btn-group">
      <a href="#" class="btn btn-dark">Log</a>
      <a href="#" class="btn btn-dark">FAQ</a>
      <a href="#"
         class="btn btn-dark"
         @click.prevent="settingsShow = !settingsShow"
      >Settings</a>
    </div>
    <Settings :settings-show.sync="settingsShow"/>
  </div>
</template>

<script>
import Settings from "@/components/Settings";

export default {
  name: "Menu",
  components: {Settings},
  data() {
    return {
      settingsShow: false
    }
  }
}
</script>

<style scoped>

</style>
