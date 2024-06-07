<template>
  <div class="container md:flex my-[80px]">
    <div class="md:w-2/5">
      <h3 class="md:text-[48px] text-[24px] max-sm:text-center text-[#282938] py-2">Frequently asked questions</h3>
      <h4 class="text-[#2405F2] md:text-[18px] text-[14px] max-sm:text-center">Contact us For More Info</h4>
    </div>
    <div class="md:w-[80%] mx-auto">
      <div v-for="(item, index) in items" :key="index" class="border-b">
        <div
          @click="toggle(index)"
          class="flex justify-between items-center py-6 md:px-10 px-4 cursor-pointer"
        >
          <div class="flex items-center space-x-4 md:text-[20px] text-[16px] gap-4">
            <span class="text-blue-600 font-bold">{{ (index + 1) | twoDigits }}</span>
            <span :class="{ 'font-bold': activeIndex === index, 'font-normal': activeIndex !== index }">{{ item.question }}</span>
          </div>
          <span>
            <i v-if="activeIndex === index" class="fas fa-times text-gray-500"></i>
            <i v-else class="fas fa-plus text-gray-500"></i>
          </span>
        </div>
        <transition name="accordion" mode="out-in">
          <div v-if="activeIndex === index" class="py-4 px-12 text-gray-700">
            {{ item.answer }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    question: "How much time does it take ?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is your class naming convention ?",
    answer: "Our class naming convention follows the BEM methodology.",
  },
  {
    question: "How do we communicate ?",
    answer: "We communicate through various channels like email, Slack, and Zoom.",
  },
  {
    question: "I have a bigger project. Can you handle it ?",
    answer: "Yes, we can handle projects of any size. We have a dedicated team to manage large projects.",
  },
  {
    question: "What is your class naming convention ?",
    answer: "Our class naming convention follows the BEM methodology.",
  },
]);

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.accordion-enter-to, .accordion-leave-from {
  max-height: 500px;
  opacity: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
