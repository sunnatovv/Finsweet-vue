<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <div class="bg-[#1C1E53] py-[12px] fixed z-50 w-full">
    <div class="container flex justify-between items-center">
      <p class="text-3xl text-white">Finsweet</p>
      <div class="flex font-semibold text-white gap-2 items-center">
        <!-- Hamburger icon for mobile view -->
        <div class="md:hidden">
          <img class="size-10" src="/hamb.png" alt="Menu" @click="toggleMenu" />
        </div>
        <!-- Navigation menu for larger screens -->
        <div class="hidden md:flex">
          <a href="/" class="text-base font-semibold m-6 group relative w-max">
            <span>Home</span>
            <span
              class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
            <span
              class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
          </a>
          <a
            href="/about"
            class="text-base font-semibold m-6 group relative w-max"
          >
            <span>About us</span>
            <span
              class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
            <span
              class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
          </a>
          <a
            href="/pricing"
            class="text-base font-semibold m-6 group relative w-max"
          >
            <span>Pricing</span>
            <span
              class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
            <span
              class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
          </a>
          <a
            href="/work"
            class="text-base font-semibold m-6 group relative w-max"
          >
            <span>Work</span>
            <span
              class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
            <span
              class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
          </a>
          <a
            href="/blog"
            class="text-base font-semibold m-6 group relative w-max"
          >
            <span>Blog</span>
            <span
              class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
            <span
              class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6 duration-300"
            ></span>
          </a>
          <button
            class="border border-[#F4F6FC33] rounded-[40px] px-8 py-3 hover:bg-white hover:text-[#1C1E53] hover:duration-500"
          >
            <a href="/contact">Contact Us</a>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-[#1C1E53] z-40 flex flex-col items-center justify-center md:hidden w-1/2"
    >
      <a href="/" class="text-base font-semibold my-4">Home</a>
      <a href="/about" class="text-base font-semibold my-4">About us</a>
      <a href="/pricing" class="text-base font-semibold my-4">Pricing</a>
      <a href="/work" class="text-base font-semibold my-4">Work</a>
      <a href="/blog" class="text-base font-semibold my-4">Blog</a>
      <button
        class="border border-[#F4F6FC33] rounded-[40px] px-8 py-3 hover:bg-white hover:text-[#1C1E53] hover:duration-500 my-4"
      >
        <a href="/contact">Contact Us</a>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
