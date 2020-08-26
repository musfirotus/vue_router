<template>
  <div class="flex items-center justify-between flex-wrap bg-gray-900 w-full p-4">
    <main class="w-3/4 bg-white text-black text-2xl">
      <router-view></router-view>
    </main>
    <SideBar />
  </div>
</template>

<script>
  import SideBar from './SideBar.vue'
  export default {
    name: 'Body',
    components: {
      SideBar
    }
  }
</script>
