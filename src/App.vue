<template>
  <div id="app" class="flex flex-wrap">
    <Header />
    <NavBar>
      <router-link to="/">Home</router-link>
      <router-link to="/post">Post</router-link>
      <router-link to="/photo">Photo</router-link>
      <router-link to="/album">Album</router-link>
    </NavBar>
    <SideBar />
    <Widget />
    <Body />
    <Footer />
    <router-view></router-view>
    <!-- <hr />
    <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import Widget from './components/Widget.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    SideBar,
    Widget,
    Body,
    Footer
  }
}
</script>

<style src="./assets/css/styles.css"></style>
