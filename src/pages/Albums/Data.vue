<template>
  <div>
    Album Page
    {{ message }}

    <ul>
      <li v-for="(album, i) in albumList" :key="i">
        <router-link :to="'/album/detail/'+album.id">
          {{ album.title }} - {{ album.id }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import albums from '../../assets/dummy/album'

export default {
  name: 'AlbumPage',
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