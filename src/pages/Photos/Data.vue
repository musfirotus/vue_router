<template>
  <div>
    Photo Page
    {{ message }}

    <ul>
      <li v-for="(photo, i) in photoList" :key="i">
        <router-link :to="'/photo/detail/'+photo.id">
          {{ photo.title }} - {{ photo.id }}
        </router-link>
      </li>
    </ul>
  </div>
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