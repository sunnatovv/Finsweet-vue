<template>
  <div class="container py-6">
    <div class="md:flex bg-[#F4F5F5] md:p-[90px] px-[50px] md:gap-[60px]">
      <div v-for="(item, index) in head" :key="index" class="max-sm:py-[25px]">
        <h2 class="text-[30px] py-4 font-semibold max-sm:text-center">{{ item }}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div><img class="w-full" src="/teacher.png" alt="teacher" /></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const head = ref(["Goal focussed", "Continuous improvement"]);
</script>

<style lang="scss" scoped></style>
