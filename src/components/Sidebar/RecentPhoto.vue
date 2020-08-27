<template>
  <div>
    <h2 class="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4">SideBar Links</h2>
    <ul class="list-reset">
      <li >
        <router-link :to="{ name: 'Home' }" class="block p-4 text-grey-darker font-semibold border-purple hover:bg-grey-lighter border-r-4">Home</router-link>
      </li>
      <li >
        <router-link :to="{ name: 'Posts' }" class="block p-4 text-grey-darker font-semibold border-purple hover:bg-grey-lighter border-r-4">Post</router-link>
      </li>
      <li >
        <router-link :to="{ name: 'Photos' }" class="block p-4 text-grey-darker font-semibold border-purple hover:bg-grey-lighter border-r-4">Photo</router-link>
      </li>
      <li >
        <router-link :to="{ name: 'Albums' }" class="block p-4 text-grey-darker font-semibold border-purple hover:bg-grey-lighter border-r-4">Album</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'RecentPhoto'
  }
</script>
