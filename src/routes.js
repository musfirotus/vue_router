import Home from './pages/Home.vue'

import PostData from './pages/Posts/Data.vue'
import PostIndex from './pages/Posts/Index.vue'
import PostDetail from './pages/Posts/Detail.vue'

import PhotoIndex from './pages/Photos/Index.vue'
import PhotoData from './pages/Photos/Data.vue'
import PhotoDetail from './pages/Photos/Detail.vue'

import AlbumIndex from './pages/Albums/Index.vue'
import AlbumData from './pages/Albums/Data.vue'
import AlbumDetail from './pages/Albums/Detail.vue'

const routes = [
  { path: '/', component: Home },
  {
    path: '/post',
    component: PostIndex,
    children: [{
      path: '',
      component: PostData
    },
      {
      path: 'detail/:id',
      component: PostDetail
    }]
  },
  {
    path: '/photo',
    component: PhotoIndex,
    children: [{
      path: '',
      component: PhotoData
    },
    {
      path: 'detail/:id',
      component: PhotoDetail
    }]
  },
  {
    path: '/album',
    component: AlbumIndex,
    children: [{
      path: '',
      component: AlbumData
    },
    {
      path: 'detail/:id',
      component: AlbumDetail
    }]
  }
]

export default routes;