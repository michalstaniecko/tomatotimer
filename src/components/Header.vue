<template>
  <div class="header bg-light container-fluid py-3">
    <div class="row">
      <div class="col-auto">
        Sardynki Biznesu<br/>
        Tomato Timer
      </div>
      <div class="col-auto ml-auto">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
name: "Header",
  components: {Menu}
}
</script>

<style scoped>

</style>
