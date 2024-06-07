<script setup>
import { ref } from "vue";

const date = ref(["blog-after.png","blog-after.png","blog-after.png","blog-after.png","blog-after.png","blog-after.png"]);
const func = (index) => {
  return date.value[index];
};
</script>
<template>
  <div class="container py-[60px] mb-8">
    <h2 class="md:text-[45px] text-[24px] text-center py-9">Our Blog</h2>
    <div class="md:grid grid-cols-3 gap-6">


    <div v-for="item,index in 6" class="">
        <img :src="func(index)" alt="">
      <h5 class="text-[#1C1E53] py-3">27 Jan 2021</h5>
      <h3 class="md:text-[24px] text-[20px] font-medium py-4">
        How one Webflow user grew his single person consultancy from $0-100K in
        14 months
      </h3>
      <p class="text-[#282938] py-4">
        See how pivoting to Webflow changed one person’s sales strategy and
        allowed him to attract
      </p>
      <div class="flex items-center gap-3 pb-8 pt-2 text-[#282938]">
        <button>Read More</button>
        <img src="/arrow-blue.png" alt="">
      </div>
    </div>
    </div>

  </div>
</template>
