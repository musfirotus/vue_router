<template>
  <div class="bg-gray-300 shadow my-2 w-1/4 bg-white text-black text-2xl h-full">
    <h2 class="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4">SideBar Links</h2>
    <ul class="list-reset">
      <li >
        <router-link to="/" class="block p-4 text-grey-darker font-semibold border-purple hover:bg-grey-lighter border-r-4">Home</router-link>
      </li>
      <li >
        <router-link to="/post" class="block p-4 text-grey-darker font-semibold border-purple hover:bg-grey-lighter border-r-4">Post</router-link>
      </li>
      <li >
        <router-link to="/photo" class="block p-4 text-grey-darker font-semibold border-purple hover:bg-grey-lighter border-r-4">Photo</router-link>
      </li>
      <li >
        <router-link to="/album" class="block p-4 text-grey-darker font-semibold border-purple hover:bg-grey-lighter border-r-4">Album</router-link>
      </li>
    </ul>
    <Widget />
  </div>
</template>

<script>
  import Widget from './Widget'
  export default {
    name: 'SideBar',
    components: {
      Widget
    }
  }
</script>
