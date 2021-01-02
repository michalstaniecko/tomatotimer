<template>
  <b-modal
    v-model="show"
    @hidden="closeModal()"
    centered
    size="xl"
    title="Timer Logs"
    >
    <template #default>
      <div>
        <table class="table table-sm">
          <thead>
            <tr>
              <th>
                {{ $t('Session') }}
              </th>
              <th>
                {{ $t('Start time') }}
              </th>
              <th>
                {{ $t('End time') }}
              </th>
              <th>
                {{ $t('Description') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <log
                v-for="(item, index) in $store.state.goals" :goal="item" :key="index" />
          </tbody>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <b-button variant="outline-secondary" @click="reset" >
        Reset
      </b-button>
    </template>
  </b-modal>
</template>

<script>
  import Log from "@/components/Logs/Log";
  export default {
    name: "Logs",
    components: {Log},
    props: ['logsShow'],
    data() {
      return {

      }
    },
    methods: {
      closeModal() {
        this.$emit('update:logsShow', false)
      },
      reset() {
        console.log('reset')
      }
    },

    computed: {
      show: {
        get() {
          return this.logsShow
        },
        set() {
          return !this.logsShow
        }
      }
    }
  }
</script>

<style scoped>

</style>
