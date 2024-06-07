<script setup></script>
<template>
  <div class="bg-[#1C1E53] pb-[140px] md:pt-[200px] pt-[130px]">
    <div class="container flex max-md:flex-wrap max-md:flex-col-reverse gap-2">
      <div class="block md:w-1/2 font-bold md:pr-10">
        <h2 class="text-white md:text-[58px] text-[30px] max-sm:text-center max-sm:py-2">
          Building stellar websites for early startups
        </h2>
        <p class="text-white font-medium md:text-[16px] text-[14px] py-8 max-sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div class="flex md:gap-8 gap-5 items-center max-sm:justify-center">
          <button
            class="border border-[#FCD980] rounded-[40px] md:py-3 py-2 md:px-8 px-[30px] md:text-[16px] text-[13px] text-black bg-[#FCD980]"
          >
            <router-link to="/work"> View our work </router-link>
          </button>
          <button
            class="border border-[#1C1E53] rounded-[40px] md:py-3 py-3 md:px-8 px-[30px] max-sm:text-[13px] text-white"
          >
            <router-link to="/pricing"> View pricing -> </router-link>
          </button>
        </div>
      </div>
      <div class="md:w-1/2">
        <img
          class="max-md:size-[80%] md:size-[96%] md:ml-4 max-md:ml-7"
          src="/intro.png"
          alt="Bu yerda siz intro rasmini korishingiz mumkin edi!"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
