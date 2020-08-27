<template>
  <section class="blog text-gray-700 body-font">
    <h1 class="text-center mt-12">Home Page</h1>
      <div class="container px-5 py-24 mx-12 mb-32">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="grid grid-cols-3 grid-rows-auto gap-4 p-4">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>
            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              <div class="title-post font-medium">Ini title</div>
              <div class="summary-post text-base text-justify">Ini post body
                <button class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span class="">Read More</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>