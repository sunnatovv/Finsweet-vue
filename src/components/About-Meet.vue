<script setup>
import { ref } from "vue";

const img = ref(["/firstMan.png", "/secondMan.png", "/thirdMan.png", "/fourthMan.png"]);
const name = ref(["John Smith", "Simon Adams", "Paul Jones", "Sara Hardin"]);
const text = ref(["CEO", "CTO", "Design Lead", "Project Manager"]);

const logo = ref(["/facebook.png", "/Twitter.png", "/LinkedIn.png"]);
</script>
<template>
  <div class="temp flex justify-center bg-[#F4F6FC]">
    <div
      class="container max-md:flex justify-center flex-wrap w-full px-[3%] md:py-[128px] text-blackBlue py-[64px]"
    >
      <h2
        class="text-center leading-[64px] md:text-5xl text-4xl font-semibold max-md:mx-4"
      >
        Meet our team
      </h2>
      <div
        class="flex mt-12 w-full justify-center max-md:flex-wrap md:justify-betwen gap-6 max-md:px-4"
      >
        <div
          class="py-12 md:px-16 px-12 w-full max-md:gap-4 bg-white hover:shadow-2xl"
          v-for="(item, index) in img"
          :key="index"
        >
          <div
            class="relative group overflow-hidden rounded-full max-md:flex max-md:justify-center"
          >
            <img class="rounded-full w-full" :src="item" alt="" />
            <img
              class="top-full w-full duration-200 absolute left-0 group-hover:top-0 max-md:left-1/2 max-md:-translate-x-1/2"
              src="/abouthover.png"
              alt=""
            />
            <div
              class="top-full max-md:w-[65%] flex duration-300 gap-4 absolute left-1/2 -translate-x-1/2 group-hover:top-1/2 translate-y-[200%] md:translate-y-9"
            >
              <a
                href=""
                class="max-md:w-1/2"
                v-for="(item_logo, index_logo) in logo"
                :key="index_logo"
                target="_blank"
                ><img :src="item_logo" alt="" class="max-md:w-1/2 mx-auto" />
              </a>
            </div>
          </div>
          <h6 class="mt-[30px] text-center text-2xl font-medium">
            {{ name[index] }}
          </h6>
          <p class="mt-1 text-center">{{ text[index] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
