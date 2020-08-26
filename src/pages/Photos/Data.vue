<template>
  <!-- <div class="about block mt-10">
      <h3 class="font-bold text-center text-5xl">Daftar Foto</h3>
      <div class="flex flex-wrap">
        <paginate
          name="draftphoto"
          :list="photoList"
          :per="5"
          ref="draftphoto"
        >
          <div class="grid grid-cols-4 grid-rows-auto gap-4 p-4" style="min-width:150px;" v-for="(photo, i) in paginated('draftphoto')" :key="i">
            <div class="mx-2 mb-auto bg-white overflow-hidden shadow-lg p-5 border border-purple-500 pt-4 pb-4">
                <img class="w-full p-4" v-bind:src="photo.thumbnailUrl" alt="Sunset in the mountains">
                <a class="px-auto text-center py-4">
                  <div class="font-bold text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl mb-2">{{photo.title}}</div>
                </a>
              <router-link class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm" :to="'/photo/detail/'+photo.id">
                Read More
              </router-link>
            </div>
          </div>
        </paginate>
        <paginate-links for="draftphoto" :limit="5" class="mt-8 text-gray-500"></paginate-links>
      </div>
  </div> -->
  <section class="blog text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="font-bold text-center mb-8 -mt-16 text-5xl">Daftar Foto</h1>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <paginate
          name="draftphoto"
          :list="photoList"
          :per="5"
          ref="draftphoto"
        >
        <div v-for="(photo, i) in paginated('draftphoto')" :key="i" class="grid grid-cols-auto grid-rows-auto gap-4 p-4">
          <img class="bg-gray-300 h-56 rounded-lg shadow-md bg-cover bg-center"  v-bind:src="photo.thumbnailUrl" />
          <div class=" w-auto bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div class="title-post font-medium">{{ photo.title }}</div>
            <div class="summary-post text-base text-justify">
              Sumber Foto : {{ photo.url }}
              <router-link class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm" :to="'/photo/detail/'+photo.id">
                Read More
              </router-link>
            </div>
          </div>
        </div>
        </paginate>
        <paginate-links for="draftphoto" :limit="5" class="mt-8"></paginate-links>
      </div>
    </div>
  </section>
</template>

<script>
import photos from '../../assets/dummy/photo'

export default {
  name: 'PhotoPage',
  data() {
    return {
      photoList: photos
    }
  },
  created() {
    console.log('Photo created.');
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