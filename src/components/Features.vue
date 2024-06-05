<script setup>
import { ref } from "vue";
const imgs = ref([
  "timer.png",
  "Icon.png",
  "Icon.png",
  "disscuss.png",
  "timer.png",
  "Icon.png",
]);

const func = (index) => {
  return imgs.value[index];
};

const h6 = ref([
  "Uses Client First",
  "Two Free Revision Round",
  "Template Customization",
  "24/7 Support",
  "Quick Delivery",
  "Hands-on approach",
]);

const parag = ref([
  "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
]);
</script>
<template>
  <div class="bg-[#F4F6FC]">
    <div class="container pb-[50px]">
      <div class="text-center pb-12 pt-[100px] md:px-[400px]">
        <h2 class="text-sm font-medium text-gray-500">Features</h2>
        <h1 class="mt-2 md:text-[48px] text-[24px] font-semibold text-gray-900">
          Design that solves problems, one product at a time
        </h1>
      </div>
      <div class="grid w-full grid-cols-3 grid-rows-2 gap-8 py[48px] mt-[47px]">
        <div
          v-for="(item, index) in h6"
          :key="index"
          class="p-12 bg-white hover:shadow-2xl"
        >
          <img :src="func(index)" alt="asdf" />
          <h6 class="text-2xl mt-[25px]" style="color: rgba(40, 41, 56, 1)">
            {{ item }}
          </h6>
          <p class="mt-3 text-[16px]" style="color: rgba(40, 41, 56, 1)">
            {{ parag[0] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
