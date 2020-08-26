<template>
  <div>
    Post Page
    {{ message }}

    <ul>
      <li v-for="(post, i) in postList" :key="i">
        {{ post.title }} - {{ post.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import posts from '../../assets/dummy/post'

export default {
  name: 'PostDetail',
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