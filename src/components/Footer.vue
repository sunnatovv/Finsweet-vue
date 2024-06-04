<script setup></script>
<template>
  <div class="bg-[#1C1E53]">
    <div class="container py-14">
      <div class="flex gap-[260px]">
        <div class="">
          <h2 class="text-3xl text-white py-3">{Finsweet</h2>
          <p class="text-white  py-4">
            We are always open to discuss your project and improve your online
            presence.
          </p>
        </div>
        <div>
          <h2 class="text-3xl text-white py-3">Lets Talk!</h2>
          <p class="text-white w-3/5 py-4">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div class="flex gap-4">
            <img v-for="item in 4" class="flex" src="/facebook.png" alt="" />
          </div>
        </div>
      </div>

      <div class="flex bg-[#FCD980] w-2/5 p-3 gap-7 mt-8">
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
