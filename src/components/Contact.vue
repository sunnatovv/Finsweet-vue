<template>
  <div class="container md:pt-[140px] pt-[70px]">
    <div class="text-center md:px-[430px] px-[50px] max-sm:pb-6">
      <h2 class="md:text-[45px] text-[22px] max-sm:py-2">Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>

    <form @submit.prevent="submitForm" class="bg-[#F4F6FC] md:mt-10 py-[30px] md:py-[70px] md:px-[100px] px-[20px] md:grid md:grid-cols-2 justify-center md:w-[1060px] mx-auto md:gap-6 mb-[100px]">
      <div class="md:h-[30px]">
        
        <h3 class="py-2">Name</h3>
        <input
          v-model="form.name"
          class="border rounded-md md:px-4 py-3 text-left hover:shadow-inner w-full"
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="">
        <h3 class="py-2">Email</h3>
        <input
          v-model="form.email"
          class="border rounded-md w-[370px] px-4 py-3 text-left hover:shadow-inner"
          type="email"
          placeholder="Enter your email"
          required
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
          v-model="form.message"
          class="w-[95%] h-[100px] px-[32px] py-[18px] resize-none hover:shadow-inner"
          placeholder="Write your question here"
          required
        ></textarea>
      </div>
      <div class="mt-2">
        <button type="submit" class="bg-[#1C1E53] border rounded-lg text-white py-3 px-10 hover:bg-[#898bd8]">
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted:', form.value);
};
</script>

<style lang="scss" scoped></style>
