<template>
  <b-modal
      v-model="_settingsShow"
      @hidden="closeModal"
      centered
      title="Settings"
  >
    <template #default>
      <div class="input-group">
        <label><input type="checkbox" v-model="settings.timerIndicationInTitle"/> Timer indication in title?</label>
      </div>
      <div class="input-group">
        <label><input type="checkbox" v-model="settings.browserNotification"/> Browser notifications?</label>
      </div>
      <div class="input-group">
        <label><input type="checkbox" v-model="settings.autoStartPomodorosAndBreaks"/> Autostart pomodoros and
          breaks?</label>
      </div>
      <div class="input-group">
        <label class="input-group-prepend" for="goals">
          <span class="input-group-text">Pomodoro goal for the day</span>
        </label>
        <input type="number" id="goals" v-model="settings.goals" class="form-control"/>
      </div>
      <div class="form-group">
        <label for="sound">Select</label>
        <div class="input-group" id="sound">
          <select size="5" class="form-control" v-model="settings.sound">
            <option value="1">sound 1</option>
            <option value="2">sound 2</option>
            <option value="3">sound 3</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="volume">
          Sound Volume
        </label>
        <div class="input-group" id="volume">
          <select size="5" class="form-control" v-model="settings.volume">
            <option value="100">100</option>
            <option value="75">75</option>
            <option value="50">50</option>
            <option value="25">25</option>
            <option value="0">0</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        Set Custom Times (in minutes)
        <div class="form-row">
          <div class="col-sm-4">
            Pomodoro
            <input type="number" v-model.number="settings.times.pomodoro" class="form-control"/>
          </div>
          <div class="col-sm-4">
            Short break
            <input type="number" v-model.number="settings.times.short_break" class="form-control"/>
          </div>
          <div class="col-sm-4">
            Long break
            <input type="number" v-model.number="settings.times.long_break" class="form-control"/>
          </div>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <b-button variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button variant="outline-secondary" @click="reset()">
        Reset
      </b-button>
      <b-button variant="success" @click="save()">
        Save
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "Settings",
  props: ['settingsShow'],
  data() {
    return {
      settings: this.$store.state.settings
    }
  },

  methods: {
    closeModal() {
      this.$emit('update:settingsShow', false)
    },
    cancel() {
      this.closeModal()
    },
    reset() {

    },
    save() {
      this.$store.dispatch('updateSettings', {settings: this.settings})
          .then((response) => {
            console.log(response)
            this.closeModal()
          })
    }
  },
  computed: {
    _settingsShow: {
      get() {
        return this.settingsShow
      },
      set() {
        return !this.settingsShow
      }
    }
  }
}
</script>

<style scoped>

</style>
