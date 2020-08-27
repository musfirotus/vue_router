<template>
  <div>
    <div class="mx-auto max-w-screen-lg h-full rounded shadow-lg">
      <h1 class="font-bold text-2xl">{{ album.title }}</h1>
      <div v-for="(photo,i) in albumPhotos" :key="i" :list="photo" class="max-w rounded border border-gray-300 shadow-lg pt-5">
        <h1 class="font-semibold text-center text-3xl">{{photo.title}}</h1>
        <div class="object-center">
          <img v-bind:src="photo.thumbnailUrl"/>
        </div>
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
    this.album = albums.filter(
        (album) => album.id == this.$route.params.id
      )[0];
    // this.album = this.getById([albums, this.$route.params.id])[0]
    this.albumPhotos = photos.filter(
      photo => {
        photo.albumId == this.$route.params.id
      }
    )[0]
    console.log(this.albumPhotos);
    console.log(this.$route.params.id);
  },
};
</script>
