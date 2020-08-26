# Step by Step vue_router Project by Musfirotus
- npm init
- vue create .
- npm run serve (untuk nyoba bisa jalan apa ngga)
- npm install vue-router
- Di src/main.js :
  ```
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter)
  ```
- Buat folder 'pages' berisi :
  - Album.vue
  - Home.vue
  - Photo.vue
  - Post.vue
- Di src/main.js :
  ```
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    import App from './App.vue'
    import Home from './pages/Home.vue'
    import Post from './pages/Post.vue'
    import Photo from './pages/Photo.vue'
    import Album from './pages/Album.vue'

    Vue.use(VueRouter)

    Vue.config.productionTip = false

    const routes = [
    { path: '/', component: Home },
    { path: '/post', component: Post },
    { path: '/photo', component: Photo },
    { path: '/album', component: Album }
    ]

    const router = new VueRouter({
    routes // short for `routes: routes`
    })

    new Vue({
    router,
    render: h => h(App),
    }).$mount('#app')
  ```
- Di src/App.vue :
  ```
    <h1>Hello App!</h1>
    <p>
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link to="/">Home</router-link>
        <router-link to="/post">Post</router-link>
        <router-link to="/photo">Photo</router-link>
        <router-link to="/album">Album</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  ```
- Buat file src/routes.js
- Terus kerjain sampe selesai programnya, wkwk, ngga ingat kalo stepnya sampe selesai :v
## TailWind CSS Config :
- buat folder src/assets/css dan src/assets/js
- buat file styles.css dan postcss.config.js di folder src
- npm install --save tailwindcss
- open styles.css , paste :
  ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  ```
- npx tailwindcss init -> untuk generate file tailwind.config.css yg isinya :
  ```
    module.exports = {
      theme: {
        extend: {},
      },
      variants: {},
      plugins: [],
    }
  ```
- npm install --save postcss-cli autoprefixer
- Buat file postcss.config.js untuk convert js ke css
- Paste ke postcss.config.js :
  ```
    module.exports = {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
  ```
- Buka package.json dan paste di object script :
    "build": "postcss styles.css -o assets/css/styles.css"
- npm run build -> untuk generate file assets/css/styles.css