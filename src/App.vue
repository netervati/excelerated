<template>
  <Menu />
  <div class="container-fluid">
    <main class="row mb-5">
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
    <Footer />
  </div>
</template>

<script>
import Barchart from "./components/Barchart.vue"
import Footer from "./components/Footer.vue"
import Import from "./components/Import.vue"
import Linechart from "./components/Linechart.vue"
import Menu from "./components/Menu.vue"
import Piechart from "./components/Piechart.vue"
import Radarchart from "./components/Radarchart.vue"
import TopFive from "./components/TopFive.vue"

export default {
  name: 'App',
  components: {
    Barchart,
    Footer,
    Import,
    Linechart,
    Menu,
    Piechart,
    Radarchart,
    TopFive
  }
}
</script>
