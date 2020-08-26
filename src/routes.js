import Home from './pages/Home.vue'
import Post from './pages/Post.vue'
import Photo from './pages/Photo.vue'
import Album from './pages/Album.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: Post },
  { path: '/photo', component: Photo },
  { path: '/album', component: Album }
]

export default routes;