<template>
  <div id="app" class="flex flex-wrap h-screen justify-between">
    <Header />
    <Body />
    <Widget />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style src="./assets/css/styles.css"></style>
