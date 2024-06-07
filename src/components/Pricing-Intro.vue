<script setup>
import { ref } from "vue";

const plans = ref([
  {
    price: "$299",
    title: "Landing Page",
    description:
      "When you’re ready to go beyond prototyping in Figma,  Webflow’s ready to help.",
    features: [
      { name: "All limited links", included: true },
      { name: "Own analytics platform", included: true },
      { name: "Chat support", included: true },
      { name: "Optimize hashtags", included: false },
      { name: "Unlimited users", included: false },
    ],
    buttonText: "Get started",
  },
  {
    price: "$399",
    title: "Website Page",
    description:
      "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    features: [
      { name: "All limited links", included: true },
      { name: "Own analytics platform", included: true },
      { name: "Chat support", included: true },
      { name: "Optimize hashtags", included: true },
      { name: "Unlimited users", included: true },
    ],
    buttonText: "Get started",
  },
  {
    price: "$499+",
    title: "Complex Project",
    description: "When you’re ready to go beyond prototyping in Figma,",
    features: [
      { name: "All limited links", included: true },
      { name: "Own analytics platform", included: true },
      { name: "Chat support", included: true },
      { name: "Optimize hashtags", included: true },
      { name: "Unlimited users", included: true },
      { name: "Assist and Help", included: true },
    ],
    buttonText: "Contact us",
  },
]);
</script>
<template>
  <div class="container pt-[140px]">
    <!-- Pricing Header -->
    <div class="text-[#282938] text-center px-[430px] py-10">
      <h2 class="text-[45px]">Our Pricing Plans</h2>
      <p class="font-medium">
        When you’re ready to go beyond prototyping in Figma, Webflow is ready to
        help you bring your designs to life — without coding them.
      </p>
    </div>
    <!-- Pricing Header -->

    <div class=" w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        <div
          v-for="plan in plans"
          :key="plan.title"
          class="border py-12 px-14 rounded-lg shadow-md hover:shadow-2xl hover:bg-[#1C1E53] hover:text-white"
        >
          <h2 class="text-2xl font-bold py-3">{{ plan.price }}</h2>
          <h3 class="text-xl py-4">{{ plan.title }}</h3>
          <p class="mt-2 mb-4">{{ plan.description }}</p>
          <ul class="py-[45px]">
            <li
              v-for="feature in plan.features"
              class="py-2 flex items-center gap-2"
              :key="feature.name"
              :class="{ 'text-gray-500': !feature.included }"
            >
              <img class="" src="/Pointer.png" alt="" />
              <i
                v-if="feature.included"
                class="fas fa-check text-green-500"
              ></i>
              <i v-else class="fas fa-times text-gray-500"></i>
              {{ feature.name }}
            </li>
          </ul>
          <div class="flex justify-center">
            <button
              v-if="plan.buttonText"
              class="mt-4 py-[15px] px-[50px] bg-[#282938] text-white rounded-[40px] hover:bg-[#FCD980] hover:text-[#282938]"
            >
              {{ plan.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
