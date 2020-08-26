<template>
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div v-for="(post, i) in postList" :key="i" class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">{{ post.title }}</div>
          <p class="text-gray-700 text-base">{{ post.body }}</p>
          <router-link class="flex items-center text-red-700" :to="'/post/'+post.id">
            Read More
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import posts from '../../assets/dummy/post'

export default {
  name: 'PostPage',
  data() {
    return {
      postList: posts,
      message: "halo"
    }
  },
  created() {
    console.log('Post created.');
  }
}
</script>