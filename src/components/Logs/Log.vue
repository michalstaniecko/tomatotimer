<template>
  <tr>
    <td class="">
      {{ goal.session }}
    </td>
    <td class="">
      {{ goal.startTime }}
    </td>
    <td class="">
      {{ goal.endTime }}
    </td>
    <td>
      <input
          type="text"
          v-model="description"
          class="form-control"
      />
    </td>
  </tr>
</template>

<script>
  export default {
    name: "Log",
    props: ['goal'],
    data() {
      return {
        description: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  td {
    vertical-align: bottom;
  }
</style>
