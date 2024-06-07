<template>
  <div class="container flex my-[80px]">
    <div class="w-2/5">
        <h3 class="text-[48px] text-[#282938] py-2">Frequently asked questions</h3>
        <h4 class="text-[#2405F2] text-[18px]">Contact us For More Info</h4>
    </div>
    <div class="w-[80%]  mx-auto">
      <div v-for="(item, index) in items" :key="index" class="border-b">
        <div
          @click="toggle(index)"
          class="flex justify-between items-center py-6 px-10 cursor-pointer"
        >
          <div class="flex items-center space-x-4 text-[20px] gap-4">
            <span class="text-blue-600 font-bold">{{
              (index + 1) | twoDigits
            }}</span>
            <span
              :class="{
                'font-bold': activeIndex === index,
                'font-normal': activeIndex !== index,
              }"
              >{{ item.question }}</span
            >
          </div>
          <span>
            <i
              v-if="activeIndex === index"
              class="fas fa-times text-gray-500"
            ></i>
            <i v-else class="fas fa-plus text-gray-500"></i>
          </span>
        </div>
        <div v-if="activeIndex === index" class="py-4 px-12 text-gray-700">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    question: "How much time does it take ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is your class naming convention ?",
    answer: "Our class naming convention follows the BEM methodology.",
  },
  {
    question: "How do we communicate ?",
    answer:
      "We communicate through various channels like email, Slack, and Zoom.",
  },
  {
    question: "I have a bigger project. Can you handle it ?",
    answer:
      "Yes, we can handle projects of any size. We have a dedicated team to manage large projects.",
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

<style lang="scss" scoped></style>
