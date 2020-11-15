<template>
  <tr>
    <td>
      {{ goal.session }}
    </td>
    <td>
      {{ goal.startTime }}
    </td>
    <td>
      {{ goal.endTime }}
    </td>
    <td>
      <input type="text" v-model="description"/>
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

<style scoped>

</style>
