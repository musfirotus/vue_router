<template>
  <section class="blog text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="font-bold text-center mb-8 -mt-16 text-5xl">Daftar Foto</h1>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <paginate
          name="draftalbum"
          :list="albumList"
          :per="10"
          ref="draftalbum"
        >
        <div v-for="(album, i) in paginated('draftalbum')" :key="i" class="grid grid-cols-auto grid-rows-auto gap-4 p-4">
          <div class="bg-gray-300 h-56 rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>
          <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div class="title-post font-medium">{{ album.title }}</div>
            <div class="summary-post text-base text-justify">
              <router-link class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm" :to="'/album/detail/'+album.id">
                Read More
              </router-link>
            </div>
          </div>
        </div>
        </paginate>
        <paginate-links for="draftalbum" :limit="10" class="mt-8"></paginate-links>
      </div>
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