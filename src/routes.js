const isAdmin = "Posts";
// const isAdmin = "";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: () =>import(/* webpackChunkName: "Home" */ "./pages/Home.vue"),
      'sidebar': () => import(/* webpackChunkName: "HomeSidebar" */ "./components/Sidebar/RecentPost.vue")
    }
  },
  {
    path: "/post",
    components: {
      default: () =>import(/* webpackChunkName: "PostIndex" */ "./pages/Posts/Index.vue"),
      'sidebar': () => import(/* webpackChunkName: "PostSidebar" */ "./components/Sidebar/RecentPost.vue")
    },
    children: [
      {
        path: "",
        name: "Posts",
        components: {
          default: () =>import(/* webpackChunkName: "PostData" */ "./pages/Posts/Data.vue"),
          'sidebar': () => import(/* webpackChunkName: "PostSidebar" */ "./components/Sidebar/RecentPost.vue")
        }
      },
      {
        path: "detail/:id",
        name: "DetailPost",
        components: {
          default: () =>import(/* webpackChunkName: "PostDetail" */ "./pages/Posts/Detail.vue"),
          'sidebar': () => import(/* webpackChunkName: "PostSidebar" */ "./components/Sidebar/RecentPost.vue")
        }
      },
    ],
    beforeEnter: (to, from, next) => {
      if (to.name !== isAdmin) {
        alert("Ngga boleh akses! Spyan kan bukan admin..");
        next({ name: "Home" });
      } else next();
    }
  },
  {
    path: "/photo",
    components: {
      default: () =>import(/* webpackChunkName: "PhotoIndex" */ "./pages/Photos/Index.vue"),
      'sidebar': () => import(/* webpackChunkName: "PhotoSidebar" */ "./components/Sidebar/RecentPhoto.vue")
    },
    children: [
      {
        path: "",
        name: "Photos",
        components: {
          default: () =>import(/* webpackChunkName: "PhotoData" */ "./pages/Photos/Data.vue"),
          'sidebar': () => import(/* webpackChunkName: "PhotoSidebar" */ "./components/Sidebar/RecentPhoto.vue")
        }
      },
      {
        path: "detail/:id",
        name: "DetailPhoto",
        components: {
          default: () =>import(/* webpackChunkName: "PhotoDetail" */ "./pages/Photos/Detail.vue"),
          'sidebar': () => import(/* webpackChunkName: "PhotoSidebar" */ "./components/Sidebar/RecentPhoto.vue")
        }
      },
    ],
  },
  {
    path: "/album",
    components: {
      default: () =>import(/* webpackChunkName: "AlbumIndex" */ "./pages/Albums/Index.vue"),
      'sidebar': () => import(/* webpackChunkName: "AlbumSidebar" */ "./components/Sidebar/RecentAlbum.vue")
    },
    children: [
      {
        path: "",
        name: "Albums",
        components: {
          default: () =>import(/* webpackChunkName: "AlbumData" */ "./pages/Albums/Data.vue"),
          'sidebar': () => import(/* webpackChunkName: "AlbumSidebar" */ "./components/Sidebar/RecentAlbum.vue")
        }
      },
      {
        path: "detail/:id",
        name: "DetailAlbum",
        components: {
          default: () =>import(/* webpackChunkName: "AlbumDetail" */ "./pages/Albums/Detail.vue"),
          'sidebar': () => import(/* webpackChunkName: "AlbumSidebar" */ "./components/Sidebar/RecentAlbum.vue")
        }
      },
    ],
  },
];

export default routes;
