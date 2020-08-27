// ini bisa masuk routes nya (buka komentarnya kalo mau test)
// const isAdmin = "Posts";

// ini ga bisa masuk routesnya
const isAdmin = "";

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
    beforeEnter: (to, from, next) => {
      if (to.name !== isAdmin) {
        alert("Ngga boleh akses! Spyan kan bukan admin..");
        next({ name: "Home" });
      } else next();
    }
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
