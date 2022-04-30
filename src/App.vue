<template>
  <div class="container-fluid">
    <main class=row>
      <section class="col-sm-12 col-md-6 col-lg-3">
        <Import />
        <Radarchart />
      </section>
      <section class="col-sm-12 col-md-12 col-lg-6">
        <Linechart />
        <TopFive />  
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
import TopFive from "./components/TopFive.vue"
import Linechart from "./components/Linechart.vue"
import Radarchart from "./components/Radarchart.vue"

export default {
  name: 'App',
  components: {
    Import,
    Piechart,
    Barchart,
    TopFive,
    Linechart,
    Radarchart
  }
}
</script>
