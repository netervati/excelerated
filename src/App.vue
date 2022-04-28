<template>
  <div class="container-fluid">
    <main class=row>
      <section class="col-sm-12 col-md-6 col-lg-3">
        <Import />
      </section>
      <section class="col-sm-12 col-md-12 col-lg-6">
        
      </section>
      <section class="col-sm-12 col-md-6 col-lg-3">
        <Piechart />
        <Barchart />
      </section>
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
