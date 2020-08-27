<template>
  <div>
    <div class="mx-auto max-w-screen-lg h-full rounded overflow-hidden shadow-lg">
      <div v-for="post in postData" :key="post.id" :list="post" class="max-w rounded border border-gray-300 shadow-lg pt-5">
        <h1 class="font-semibold text-center text-3xl">{{post.title}}</h1>
        <h5 class="px-12 pb-12 pt-6">{{post.body}}</h5>
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
      postData: []
    }
  },
  created() {
      return this.postData = posts.filter(post => {
          return post.id == this.$route.params.id
      })
  }
}
</script>