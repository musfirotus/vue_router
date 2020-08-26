<template>
    <section class="blog text-gray-700 body-font">
      
      <div class="container px-5 py-24 mx-auto">
        <h1 class="font-bold text-center mb-8 -mt-16 text-5xl">Daftar Postingan</h1>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <paginate
            name="posting"
            :list="postList"
            :per="10"
            ref="posting"
          >
            <div v-for="(post, i) in paginated('posting')" :key="i" class="grid grid-cols-auto grid-rows-auto gap-4 p-4">
              <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>
              <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div class="title-post font-medium">{{ post.title }}</div>
                <div class="summary-post text-base text-justify">
                  {{ post.body }}
                  <router-link class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm" :to="'/post/detail/'+post.id">
                    Read More
                  </router-link>
                </div>
              </div>
            </div>
          </paginate>
          <!-- <span v-if="$refs.paginator">
            Viewing {{ $refs.paginator.pageItemsCount }} results
          </span> -->
          <paginate-links for="posting" :limit="10" class="mt-8"></paginate-links>
        </div>
        
      </div>
    </section>
</template>

<script>
import posts from '../../assets/dummy/post'

export default {
  name: 'PostPage',
  data() {
    return {
      postList: posts
    }
  },
  created() {
    console.log('Post created.');
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