<template>
  <div>
    <div class="container px-5 mx-auto min-h-screen">
      <div class="mx-auto my-12 max-w-screen-lg h-full rounded shadow-lg">
          <h1 class="font-semibold text-center text-3xl">{{ album.title }}</h1>
          <h1>{{ albumPhotos.id}}</h1>
          <div
            v-for="(foto, i) in albumPhotos"
            :key="i"
            class="max-w rounded border border-gray-300 shadow-lg pt-5"
          >
            <img :src="foto.thumbnailUrl" alt="" />
            <h1>{{ foto.albumId }}</h1>
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
  props: ['id'],
  data() {
    return {
      album: [],
      albumPhotos: []
    };
  },
  mounted() {
    console.log("Album created.");
    this.album = albums.filter(
        (album) => album.id == this.$route.params.id
      )[0];
    this.albumPhotos = photos.filter(
      (val) => val.albumId == this.$route.params.id
    );
    console.log(this.id, this.$props.id);
  },
};
</script>
