<template>
  <div class="container-fluid">
    <main class=row>
      <Import />
      <Piechart />
      <Barchart />
    </main>
  </div>
</template>

<script>
import Import from "./components/Import.vue"
import Piechart from "./components/Piechart.vue"
import Barchart from "./components/Barchart.vue"

export default {
  name: 'App',
  components: {
    Import,
    Piechart,
    Barchart
  }
}
</script>
