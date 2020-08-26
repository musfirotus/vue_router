<template>
  <div id="app" class="flex flex-col h-screen justify-between">
    <Header />
    <SideBar />
    <Widget />
    <Body />
    <Footer />
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'
import Widget from './components/Widget.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    Widget,
    Body,
    Footer
  }
}
</script>

<style src="./assets/css/styles.css"></style>
