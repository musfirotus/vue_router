<template>
  <div>
    Photo Page
    {{ message }}

    <ul>
      <li v-for="(photo, i) in photoList" :key="i">
        {{ photo.title }} - {{ photo.id }}
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