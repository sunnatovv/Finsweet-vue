<script setup>
import { reactive, ref } from "vue";

const categories = ref(["All", "UI Design", "Webflow Design", "Figma Design"]);
const activeIndex = ref(0);

const selectCategory = (index) => {
  activeIndex.value = index;
};

const obj = reactive([
  {
    img: "temp1.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    but: "View Portfolio",
  },
  {
    img: "temp2.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    but: "View Portfolio",
  },
  {
    img: "temp3.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    but: "Read case study",
  },
  {
    img: "temp4.svg",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    but: "Read case study",
  },
  {
    img: "temp5.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    but: "Read case study",
  },
  {
    img: "temp6.png",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    but: "Read case study",
  },
]);
</script>
<template>
  <div class="flex justify-center max-sm:mt-10">
    <div class="container pt-[60px]">
      <div class="flex justify-center gap-3">
        <span
          v-for="(category, index) in categories"
          :key="index"
          @click="selectCategory(index)"
          class="md:py-6"
          :class="{
            'text-blue-600 font-normal': activeIndex === index,
            'text-[#282938]': activeIndex !== index,
            'cursor-pointer': true,
          }"
        >
          {{ category }}
        </span>
      </div>

      <div class="md:grid md:grid-cols-2 gap-[34px] md:py-10 pb-10 pt-2">
        <div v-for="(item, index) in obj" :key="index" class="hover:shadow-2xl px-4 max-sm:pt-6 max-sm:text-center">
          <img class="w-full" :src="item.img" alt="" />
          <h3 class="md:text-[35px] text-[20px] pt-4 text-[#282938] max-sm:text-center">
            Template {{ index + 1 }}
          </h3>
          <p class="font-normal py-3">{{ item.description }}</p>
          <div class="flex items-center gap-3 pt-4 pb-10 max-sm:justify-center">
            <h3 class="font-medium text-[#282938]">{{ item.but }}</h3>
            <img src="/arrow-blue.png" alt="" />
          </div>
        </div>
      </div>

      <div class="mt-10 text-center md:px-[350px] py-[60px]">
        <h2 class="md:text-[48px] text-[24px] font-semibold">Let's build something great together</h2>
        <p class="py-5 px-[60px]">
          Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
          ultricies nec dolor sit amet, scelerisque cursus purus.
        </p>

        <button class="bg-[#FCD980] border rounded-[40px] py-3 px-8"><router-link to="/contact"> Contact Us </router-link></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
