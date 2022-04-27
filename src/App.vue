<template>
  <div class="container-fluid">
    <div class=row>
      <Import />
      <Piechart />
    </div>
  </div>
</template>

<script>
import Import from "./components/Import.vue"
import Piechart from "./components/Piechart.vue"

export default {
  name: 'App',
  components: {
    Import,
    Piechart
  }
}
</script>
