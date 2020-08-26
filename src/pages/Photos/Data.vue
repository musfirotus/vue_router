<template>
  <section class="blog text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <h1 class="font-bold text-center mb-8 -mt-16 text-5xl">Daftar Foto</h1>
          <paginate
          name="draftphoto"
          :list="photoList"
          :per="5"
          ref="draftphoto"
          class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"
        >
          <div v-for="(photo, i) in paginated('draftphoto')" :key="i" class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <img class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" v-bind:src="photo.thumbnailUrl" style="background-image: url(photo.thumbnailUrl)"/>
            <div style="min-width: 294px;" class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              <div class="title-post font-medium">{{ photo.title }}</div>
              <div class="summary-post text-base text-justify">
                <router-link class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm" :to="'/photo/detail/'+photo.id">
                  <span class="">Read Mode</span>
                </router-link>
              </div>
            </div>
          </div>
</paginate>
        <paginate-links for="draftphoto" :limit="5" class="mt-8"></paginate-links>
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