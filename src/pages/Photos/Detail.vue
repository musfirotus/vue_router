<template>
  <div>
    <div class="mx-auto max-w-screen-lg h-full rounded shadow-lg">
      <div v-for="photo in photoList" :key="photo.id" :list="photo" class="max-w rounded border border-gray-300 shadow-lg pt-5">
        <h1 class="font-semibold text-center text-3xl">{{photo.title}}</h1>
        <div class="object-center">
          <img v-bind:src="photo.thumbnailUrl"/>
        </div>
        <h5 class="px-12 pb-12 pt-6">{{photo.body}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import photos from '../../assets/dummy/photo'

export default {
  name: 'PhotoPage',
  data() {
    return {
      photoList: []
    }
  },
  created() {
    console.log('Photo created.');
    return this.photoList = photos.filter(val => {
      return val.id == this.$route.params.id
    })
  }
}
</script>