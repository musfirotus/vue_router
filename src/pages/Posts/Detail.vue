<template>
  <div>
    Post Pages
    {{ message }}
    {{ $route.params.id }}
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
    // this.postList = posts;
  }
}
</script>