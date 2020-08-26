<template>
  <div>
    Post Pages
    {{ message }}

    <ul>
      <li v-for="(post, i) in postList" :key="i">
        <router-link :to="'/post/'+post.id">
          {{ post.title }} - {{ post.id }}
        </router-link>
      </li>
    </ul>
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
    // this.postList = posts;
  }
}
</script>