<template>
  <div id="app" class="flex flex-wrap h-screen justify-between">
    <Header />
    <div class="flex items-center justify-between flex-wrap bg-gray-900 w-full p-4">
      <main class="w-3/4 bg-white text-black text-2xl">
        <section class="blog text-gray-700 body-font">
          <router-view />
        </section>
      </main>
      <div class="bg-gray-300 shadow my-2 w-1/4 text-black text-2xl h-full">
        <router-view name="sidebar" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isAdmin: false,
    };
  }
}
</script>

<style src="./assets/css/styles.css"></style>
