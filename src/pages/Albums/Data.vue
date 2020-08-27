<template>
  <section class="blog text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <h1 class="font-bold text-center mb-8 -mt-16 text-5xl">Daftar Album</h1>
          <paginate
          name="draftalbum"
          :list="albumList"
          :per="15"
          ref="draftalbum"
          class="flex flex-wrap sm:-m-4 mb-8"
        >
          <div v-for="(album, i) in paginated('draftalbum')" :key="i" class="p-4 md:w-1/3 md:mb-0 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div style="min-width: 294px;" class=" w-70 border border-purple-600 bg-white shadow-lg rounded-lg overflow-hidden p-5">
              <div class="title-post font-medium">{{ album.title }}</div>
              <div class="summary-post text-base text-justify">
                <router-link class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm" :to="{ name: 'DetailAlbum', params: { id: album.id }}">
                  <span class="">Read Mode</span>
                </router-link>
              </div>
            </div>
          </div>
        </paginate>
        <paginate-links for="draftalbum" :limit="15"></paginate-links>
      </div>
    </section>
</template>

<script>
import albums from '../../assets/dummy/album'

export default {
  name: 'AlbumPage',
  data() {
    return {
      albumList: albums
    }
  },
  created() {
    console.log('Album created.');
  }
}
</script>

<style>
ul.paginate-links {
  display:flex;
  flex-wrap:wrap;
  margin:0 10px
}

ul.paginate-links > li.number > a {
  background-color:black;
  border-radius:3px;
  margin-left: 3px;
  margin-right: 3px;
  padding:5px;
  cursor: pointer;
}
ul.paginate-links > li.active > a {
  color:white;
}
</style>