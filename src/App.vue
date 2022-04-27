<template>
  <div class="container-fluid">
    <main class=row>
      <Import />
      <Piechart />
    </main>
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
