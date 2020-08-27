<template>
  <div>
    Album Page
    <!-- {{ $route.params.id }} -->
  </div>
</template>

<script>
import albums from '../../assets/dummy/album'

export default {
  name: 'AlbumDetail',
  data() {
    return {
      albumList: albums,
      message: "halo"
    }
  },
  created() {
    console.log('Album created.');
    // this.albumList = albums
  }
}
</script>