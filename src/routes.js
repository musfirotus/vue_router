// import Home from "./pages/Home.vue";

// import PostData from "./pages/Posts/Data.vue";
// import PostIndex from "./pages/Posts/Index.vue";
// import PostDetail from "./pages/Posts/Detail.vue";

// import PhotoIndex from "./pages/Photos/Index.vue";
// import PhotoData from "./pages/Photos/Data.vue";
// import PhotoDetail from "./pages/Photos/Detail.vue";

// import AlbumIndex from "./pages/Albums/Index.vue";
// import AlbumData from "./pages/Albums/Data.vue";
// import AlbumDetail from "./pages/Albums/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "./pages/Home.vue"),
  },
  {
    path: "/post",
    name: "PostIndexes",
    component: () =>
      import(/* webpackChunkName: "PostIndex" */ "./pages/Posts/Index.vue"),
    children: [
      {
        path: "",
        name: "Posts",
        component: () =>
          import(/* webpackChunkName: "PostData" */ "./pages/Posts/Data.vue")
      },
      {
        path: "detail/:id",
        name: "DetailPost",
        component: () =>
          import(/* webpackChunkName: "PostDetail" */ "./pages/Posts/Detail.vue")
      },
    ],
  },
  {
    path: "/photo",
    name: "PhotoIndexes",
    component: () =>
      import(/* webpackChunkName: "PhotoIndex" */ "./pages/Photos/Index.vue"),
    children: [
      {
        path: "",
        name: "Photos",
        component: () =>
          import(/* webpackChunkName: "PhotoData" */ "./pages/Photos/Data.vue")
      },
      {
        path: "detail/:id",
        name: "DetailPhoto",
        component: () =>
          import(/* webpackChunkName: "PhotoDetail" */ "./pages/Photos/Detail.vue")
      },
    ],
  },
  {
    path: "/album",
    name: "AlbumIndexes",
    component: () =>
          import(/* webpackChunkName: "AlbumIndex" */ "./pages/Albums/Index.vue"),
    children: [
      {
        path: "",
        name: "Albums",
        component: () =>
          import(/* webpackChunkName: "AlbumData" */ "./pages/Albums/Data.vue")
      },
      {
        path: "detail/:id",
        name: "DetailAlbum",
        component: () =>
          import(/* webpackChunkName: "AlbumDetail" */ "./pages/Albums/Detail.vue")
      },
    ],
  },
];

export default routes;
