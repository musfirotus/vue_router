<template>
  <div id="app" class="flex flex-wrap h-screen justify-between">
    <Header />
    <div class="flex items-center justify-between flex-wrap bg-gray-900 w-full p-4">
      <Body />
      <div class="bg-gray-300 shadow my-2 w-1/4 text-black text-2xl h-full">
        <SideBar />
        <Widget />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import SideBar from './components/SideBar.vue'
import Widget from './components/Widget.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body,
    SideBar,
    Widget,
    Footer
  }
}
</script>

<style src="./assets/css/styles.css"></style>
