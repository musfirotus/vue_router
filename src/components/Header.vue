<template>
  <header class="flex items-center justify-between flex-wrap bg-gray-900 p-6 w-full">
    <div class="flex items-center w-3/4 flex-shrink-0 text-white mr-6">
      <img alt="Vue logo" src="../assets/logo.png" class="fill-current h-10 w-10 mr-2">
      <span class="font-semibold text-xl tracking-tight">Vue JS</span>
    </div>
    <div class="w-3/4 block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-lg text-white lg:flex-grow block mt-4 lg:inline-block lg:mt-0 font-semibold float-right">
        <router-link to="/" class="mr-4 hover:text-blue-500">Home</router-link>
        <router-link to="/post" class="mr-4 hover:text-blue-500">Post</router-link>
        <router-link to="/photo" class="mr-4 hover:text-blue-500">Photo</router-link>
        <router-link to="/album" class="-mr-4 hover:text-blue-500">Album</router-link>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>
