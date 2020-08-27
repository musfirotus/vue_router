<template>
  <div>
    <div class="mx-auto max-w-screen-lg h-full rounded shadow-lg">
      <div v-for="album in albumList" :key="album.id" :list="album" class="max-w rounded border border-gray-300 shadow-lg pt-5">
        <h1 class="font-semibold text-center text-3xl">{{album.title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import albums from '../../assets/dummy/album'

export default {
  name: 'AlbumDetail',
  data() {
    return {
      albumList: [],
    }
  },
  created() {
    console.log('Album created.');
    return this.albumList = albums.filter(val => {
      return val.id == this.$route.params.id
    })
  }
}
</script>