<template>
  <div>
    Post Pages
    {{ message }}

    <ul>
      <li v-for="(post, i) in postList" :key="i">
        {{ post.title }} - {{ post.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import posts from '../assets/dummy/post'

export default {
  name: 'PostPage',
  data() {
    return {
      postList: [],
      message: "halo"
    }
  },
  created() {
    console.log('Post created.');
    this.postList = posts;
  }
}
</script>