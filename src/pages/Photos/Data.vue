<template>
  <section class="blog text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="font-bold text-center mb-8 -mt-16 text-5xl">Daftar Foto</h1>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <!-- <paginate
          name="posting"
          :list="postList"
          :per="10"
          ref="posting"
        > -->
        <div v-for="(photo, i) in photoList" :key="i" class="grid grid-cols-auto w-full grid-rows-auto gap-4 p-4">
          <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>
          <div class=" w-70 bg-white -mt-10 w-full shadow-lg rounded-lg overflow-hidden p-5">
            <div class="title-post font-medium">{{ photo.title }}</div>
            <div class="summary-post text-base text-justify">
              Sumber Foto : {{ photo.url }}
              <router-link class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm" :to="'/photo/detail/'+photo.id">
                Read More
              </router-link>
            </div>
          </div>
        </div>
        <!-- </paginate> -->
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
      photoList: photos,
      message: "halo"
    }
  },
  created() {
    console.log('Photo created.');
    // this.photoList = photos
  }
}
</script>