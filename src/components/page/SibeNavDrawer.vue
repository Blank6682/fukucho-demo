<template>
  <div class="sibe-nav" v-if="isShow">
    <div class="mt-[48px]">
      <div v-for="(item, index) in navList" :key="index" class="mx-2">
        <a href="#" class="sibe-title">
          <span> {{ item.title }}</span>
          <span v-if="item.children.length" class="sibe-title-icon"></span>
        </a>
      </div>
      <div class="mt-[26px] mx-2">
        <a href="" class="sibe-title">トップページ</a>
        <a href="" class="sibe-title">会社案内</a>
        <a href="" class="sibe-title">採用情報</a>
        <a href="" class="sibe-title">お問い合わせ</a>
      </div>
      <div class="flex items-center justify-start mx-2 mt-11">
        <ul class="flex">
          <li class="mx-3">
            <a href="#" title="富久長｜FUKUCHO on Instagram">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="w-5 h-5 text-black icon icon-instagram"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z"
                ></path>
                <path
                  d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"
                ></path>
                <circle cx="390.5" cy="121.5" r="30.2"></circle>
              </svg>
            </a>
          </li>
          <li class="mx-3">
            <a href="" title="富久長｜FUKUCHO on Facebook">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="w-5 h-5 text-black icon icon-facebook"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#444"
                  d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="mx-3">
            <a href="" title="富久長｜FUKUCHO on YouTube">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="w-5 h-5 text-black icon icon-youtube"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#444"
                  d="M-.196 15.803q0 1.23.812 2.092t1.977.861h14.946q1.165 0 1.977-.861t.812-2.092V3.909q0-1.23-.82-2.116T17.539.907H2.593q-1.148 0-1.969.886t-.82 2.116v11.894zm7.465-2.149V6.058q0-.115.066-.18.049-.016.082-.016l.082.016 7.153 3.806q.066.066.066.164 0 .066-.066.131l-7.153 3.806q-.033.033-.066.033-.066 0-.098-.033-.066-.066-.066-.131z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mx-4 mt-10 text-left cursor-pointer">
      <a class="relative py-3 pl-4 text-sm border border-gray-300 border-solid pr-9">
        <span>Japanese</span>
        <span
          class="
            absolute
            top-[15px]
            right-3
            w-[7px]
            h-[7px]
            transform
            rotate-45
            border-b border-r border-solid border-theme
          "
        ></span>
      </a>
    </div>
  </div>

  <div class="sibe-nav-button" :class="isShow ? 'sibe-show-btn' : ''" @click="isShow = !isShow">
    <span class="sibe-btn-child"></span>
    <span class="sibe-btn-child"></span>
    <span class="sibe-btn-child"></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const props = defineProps({
  navList: {
    type: Array,
    defalut: () => [],
  },
});
const isShow = ref(false);
</script>

<style scoped>
.sibe-nav {
  animation: toShow 0.5s ease 1;
  @apply absolute min-w-[380px] z-[999] top-0 left-0 mt-[60px] w-[50vw] min-h-screen bg-white hover:overflow-y-scroll;
}

.sibe-title {
  @apply flex items-center justify-between relative w-full pl-3 pr-4 py-3 text-base font-normal text-left rounded-md hover:text-theme hover:bg-[#f7f7f7];
}

.sibe-title-icon {
  @apply block w-3 h-3 border-t-[2px] border-r-[2px] border-solid border-black rotate-45;
}
.sibe-title:hover .sibe-title-icon {
  margin-right: -3px;
  transition: all 0.3s ease;
}
.sibe-nav-button {
  transition: all 0.5s ease;
  @apply fixed flex flex-col items-center justify-center right-3 bottom-3 w-[60px] h-[60px] rounded-full bg-white shadow z-50;
}
.sibe-btn-child {
  transition: all 0.5s ease;
  @apply block w-[56%] h-[1px] mb-[6px] bg-theme;
}

.sibe-show-btn {
  transform: translateX(15px);
}
.sibe-show-btn .sibe-btn-child:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.sibe-show-btn .sibe-btn-child:nth-child(2) {
  transform: translateY(0px) rotate(-45deg);
}
.sibe-show-btn .sibe-btn-child:nth-child(3) {
  @apply bg-white;
}

@keyframes toShow {
  0% {
    transform: translateX(-50vw);
  }
  100% {
    transform: translateX(0);
  }
}
.sibe-nav::after {
  content: "";
  z-index: 50;
  width: 100vw;
  height: 100vw;
  background: rgba(82, 81, 81, 1) transparent;
}
</style>
