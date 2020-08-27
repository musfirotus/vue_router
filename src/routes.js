import Home from './pages/Home.vue'

import Post from './pages/Posts/Data.vue'
import Photo from './pages/Photos/Data.vue'
import Album from './pages/Albums/Data.vue'
import PostDetail from './pages/Posts/Detail.vue'
import PhotoDetail from './pages/Photos/Detail.vue'
import AlbumDetail from './pages/Albums/Detail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: Post },
  { path: '/post/detail/:id', component: PostDetail },
  { path: '/photo', component: Photo },
  { path: '/photo/detail/:id', component: PhotoDetail },
  { path: '/album', component: Album },
  { path: '/album/detail/:id', component: AlbumDetail }
]

export default routes;