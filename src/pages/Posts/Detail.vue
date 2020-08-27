<template>
  <div>
    <div class="container px-5 mx-auto min-h-screen">
      <div class="mx-auto my-12 max-w-screen-lg h-full rounded shadow-lg">
        <div v-for="post in postList" :key="post.id" :list="post" class="max-w rounded border border-gray-300 shadow-lg pt-5">
          <h1 class="font-semibold text-center text-3xl">{{post.title}}</h1>
          <h5 class="px-12 pb-12 pt-6">{{post.body}}</h5>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import posts from '../../assets/dummy/post'

export default {
  name: 'PostDetail',
  data() {
    return {
      postList: []
    }
  },
  created() {
    return this.postList = posts.filter(val => {
      return val.id == this.$route.params.id
    })
  }
}
</script>