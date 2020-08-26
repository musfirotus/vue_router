<template>
  <div>
    Post Detail Page
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
      postList: posts
    }
  },
  created() {
    console.log('Post created.');
  }
}
</script>