<template>
    <main class="w-3/4 bg-white text-black text-2xl">
    <section class="blog text-gray-700 body-font">
      <router-view></router-view>
      </section>
    </main>
</template>

<script>
  export default {
    name: 'Body'
  }
</script>
