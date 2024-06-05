<template>
  <div class="container">
    <div class="flex justify-between items-center py-4 mt-4">
      <h2 class="text-[48px] text-black">View our projects</h2>
      <button class="px-6 py-3">View more -></button>
    </div>

    <div class="grid grid-cols-3 my-[40px] gap-5">
      <div class="col-span-2 row-span-2 relative overflow-hidden group">
        <div
          class="absolute h-full w-[45%] top-0 duration-300 -left-full group-hover:left-0 bg-gradient-to-r from-[#1C1E5368]/40 to-[#1C1E53] px-8 pt-[360px]"
        >
          <h2 class="text-[24px] text-white">
            Workhub office Webflow Webflow Design
          </h2>
          <p class="text-white py-4">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
          </p>
          <div class="flex items-center gap-4">
            <a href="" class="text-[#FCD980]">View project</a>
            <img src="/yellowarr.png" alt="" />
          </div>
        </div>
        <img class="w-full h-full" src="/Card.png" alt="" />
      </div>
      <div class="row-span-1 relative overflow-hidden group">
        <div
          class="absolute h-full w-full top-0 duration-300 -left-full group-hover:left-0 bg-gradient-to-r from-[#1C1E5368]/40 to-[#1C1E53] pl-[46px] pr-[160px] pt-[140px]"
        >
          <h3 class="text-white text-[24px]">Unisaas Website Design</h3>
          <div class="flex items-center gap-4 py-3">
            <a href="" class="text-[#FCD980]">View portfolio</a>
            <img src="/yellowarr.png" alt="arrow" />
          </div>
        </div>
        <img class="w-full h-full" src="/miniCard.png" alt="" />
      </div>
      <div class="row-span-1 relative overflow-hidden group">
        <div
          class="absolute h-full w-full top-0 duration-300 -left-full group-hover:left-0 bg-gradient-to-r from-[#1C1E5368]/40 to-[#1C1E53] pl-[46px] pr-[160px] pt-[140px]"
        >
          <h3 class="text-white text-[24px]">Unisaas Cinema Design</h3>
          <div class="flex items-center gap-4 py-3">
            <a href="" class="text-[#FCD980]">View cinema</a>
            <img src="/yellowarr.png" alt="arrow" />
          </div>
        </div>
        <img class="w-full h-full ml-2" src="/miniCard2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>
