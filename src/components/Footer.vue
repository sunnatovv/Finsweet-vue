<script setup></script>
<template>
  <div class="bg-[#1C1E53]">
    <div class="container py-14">
      <div class="md:flex gap-[260px]">
        <div class="">
          <h2 class="md:text-3xl text-2xl text-white py-3">{Finsweet</h2>
          <p class="text-white  md:py-4">
            We are always open to discuss your project and improve your online
            presence.
          </p>
        </div>
        <div class="max-sm:mt-3">
          <h2 class="md:text-3xl text-2xl text-white py-3">Lets Talk!</h2>
          <p class="text-white md:w-3/5 md:py-4 py-2">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div class="flex gap-4 max-sm:py-3">
            <img v-for="item in 4" class="flex" src="/facebook.png" alt="" />
          </div>
        </div>
      </div>

      <div class="flex bg-[#FCD980] md:w-2/5 p-3 gap-7 mt-8">
        <div>
          <h3 class="text-[18px]">Email me At</h3>
          <p>contact@website.com</p>
        </div>
        <div class="">
          <h3 class="text-[18px]">Call Us</h3>
          <p>0927 6277 28525</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
