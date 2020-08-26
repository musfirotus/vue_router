<template>
  <div>
    Album Page
    {{ message }}

    <ul>
      <li v-for="(album, i) in albumList" :key="i">
        {{ album.title }} - {{ album.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import albums from '../assets/dummy/album'

export default {
  name: 'AlbumPage',
  data() {
    return {
      albumList: [],
      message: "halo"
    }
  },
  created() {
    console.log('Album created.');
    this.albumList = albums
  }
}
</script>