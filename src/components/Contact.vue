<template>
  <div class="container md:pt-[140px]">
    <div class="text-center px-[430px]">
      <h2 class="text-[45px]">Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>

    <div
      class="bg-[#F4F6FC] mt-10 py-[70px] px-[100px] grid grid-cols-2 justify-center w-[1060px] mx-auto gap-6 mb-[100px]"
    >
      <div class="h-[30px]">
        <h3 class="py-2">Name</h3>
        <input
          class="border rounded-md w-[370px] px-4 py-3 text-left hover:shadow-inner"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div class="">
        <h3 class="py-2">Email</h3>
        <input
          class="border rounded-md w-[370px] px-4 py-3 text-left hover:shadow-inner"
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <div class="">
        <h3 class="py-2">Subject</h3>
        <input
          class="border rounded-md w-[370px] px-4 py-3 text-left hover:shadow-inner"
          type="text"
          placeholder="Provide content"
        />
      </div>
      <div class="">
        <h3 class="py-2">Subject</h3>
        <input
          class="border rounded-md w-[370px] px-4 py-3 text-left hover:shadow-inner"
          type="text"
          placeholder="Select subject"
        />
      </div>
      <div class="col-span-2">
        <h3 class="py-2">Message</h3>
        <textarea
          class="w-[95%] h-[100px] px-[32px] py-[18px] resize-none hover:shadow-inner"
          name="text"
          id=""
          placeholder="Write you question here"
        ></textarea>
      </div>
      <div class="mt-2">
        <button class="bg-[#1C1E53] border rounded-lg text-white py-3 px-10 hover:bg-[#898bd8]">Send Message</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
