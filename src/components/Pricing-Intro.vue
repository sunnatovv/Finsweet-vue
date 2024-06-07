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
    <div class="text-[#282938] text-center md:px-[430px] md:py-10">
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
          v-for="(plan,index) in plans"
          :key="plan.title"
          :class="index==1 ? 'bg-[#1C1E53] text-white': ''"
          class="border py-12 px-14 rounded-lg shadow-md hover:shadow-2xl "
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
              <img class="" v-if="feature.included" src="/Pointer.png" alt="" />
              <span v-else>
                                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g style="mix-blend-mode: luminosity">
                      <path
                        d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z"
                        fill="#a8aab0"
                      />
                      <path
                        d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z"
                        stroke="url(#paint0_linear_174_512)"
                        stroke-width="3"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_174_512"
                        x1="-4.84615"
                        y1="-17"
                        x2="11.6069"
                        y2="11.3225"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

              </span>
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
              :class="index==1?'bg-[#FCD980] text-[#282938]' :'text-white'"
              class="mt-4 py-[15px] px-[50px] bg-[#282938]  rounded-[40px] "
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
