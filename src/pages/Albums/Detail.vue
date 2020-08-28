<template>
  <div>
    <div class="mx-auto max-w-screen-lg h-full rounded shadow-lg">
      <h1 class="font-bold text-2xl">{{ album.title }}</h1>
      <div
        v-for="(foto, i) in albumPhotos"
        :key="i"
        class="max-w rounded border border-gray-300 shadow-lg pt-5"
      >
        <img :src="foto.thumbnailUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import albums from "../../assets/dummy/album";
import photos from "../../assets/dummy/photo";

export default {
  name: "AlbumDetail",
  data() {
    return {
      album: [],
      albumPhotos: []
    };
  },
  created() {
    console.log("Album created.");
    const filteredAlbum = this.album = albums.filter(
        (album) => album.id == this.$route.params.id
      )[0];
    // this.album = this.getById([albums, this.$route.params.id])[0]
    const filteredPhoto = this.albumPhotos = photos.filter(photo=>photo.albumId==this.album.id)
    return { filteredAlbum, filteredPhoto }
  },
};
</script>
