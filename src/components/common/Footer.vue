<template>
  <!-- 回到顶部 -->
  <div class="flex items-center justify-center mt-20 mb-12 mx-0">
    <a class="block w-14 h-14 relative border border-solid border-gray-300 rounded-full">
      <img
        class="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 w-10 h-10"
        src="//cdn.shopifycdn.net/s/files/1/0587/1052/4079/t/4/assets/icon_pagetop.svg?v=1753606108386969985"
        alt=""
      />
    </a>
  </div>
  <div style="padding: 80px 10vw 50px; background: #fbfaf7">
    <!--底部 导航栏 -->
    <div class="flex-wrap flex justify-center list-none mb-20">
      <div class="w-1/3 p-0 text-left my-0" v-for="nav in navList" :key="'footNav' + nav.id">
        <h4 class="text-theme text-sm leading-normal m0 p0">{{ nav.title }}</h4>
        <ul class="list-none ml-0 text-xs leading-relaxed mt-5">
          <li
            class="mb-4 text-black"
            v-for="(item, index) in nav.children"
            :key="'footNavChild' + index"
          >
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <!-- 外链iocn -->
    <div class="flex items-center justify-center">
      <ul class="flex my-14">
        <li class="mx-3">
          <a href="#" title="富久長｜FUKUCHO on Instagram">
            <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              class="icon icon-instagram w-6 h-6 text-black"
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
              class="icon icon-facebook w-6 h-6 text-black"
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
              class="icon icon-youtube w-6 h-6 text-black"
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
    <!-- 底部设置语言 -->
    <div class="flex items-center justify-center relative my-7">
      <div
        class="border border-solid border-gray-300 p-2 flex justify-between"
        @click="showLanguage = !showLanguage"
      >
        Japanese
        <img
          class="ml-1.5"
          src="//cdn.shopifycdn.net/s/files/1/0587/1052/4079/t/4/assets/icon_arrow_primary.svg"
        />
      </div>
      <div
        class="bg-white p-6 border border-black border-solid absolute -top-28"
        v-if="showLanguage"
      >
        <p class="mb-3">English</p>
        <p class="underline">Japanese</p>
      </div>
    </div>
    <!-- 底部送信 -->
    <div class="flex items-center justify-center">
      <div>
        <h4 class="text-theme text-sm leading-normal m0 p0">NewsLetter</h4>
        <p class="mt-5 text-sm">
          富久長の最新情報や商品の入荷情報などを、ニュースレターでお知らせしています。
        </p>
        <div class="mt-4 max-w-lg text-sm leading-7 relative flex flex-1 p-0">
          <input
            type="text"
            class="
              text-gray-400
              w-4/5
              py-2
              px-5
              border border-solid border-gray-300
              focus:border-gray-300
            "
            placeholder="メールアドレス"
          />
          <button class="w-1/5 tracking-widest bg-yellow-700 text-sm text-white px-7">送信</button>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center mt-16">
      <img
        class="w-28"
        src="//cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/logo_footer_be642cf4-15eb-45cd-8b9a-f072c80f66b4_240x.png?v=1637120223"
        alt=""
      />
      <a href="" class="mt-10 text-center text-sm text-theme">©Imada Sake Brewing Co., Ltd.</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const navList = ref([
  {
    id: 1,
    title: "Contents",
    children: [
      { name: "富久長の想い", url: "#" },
      { name: "富久長の酒", url: "#" },
      { name: "取扱店", url: "#" },
    ],
  },
  {
    id: 2,
    title: "Shopping",
    children: [
      { name: "オンラインショップ", url: "#" },
      { name: "支払い方法について", url: "#" },
      { name: "発送方法・送料について", url: "#" },
      { name: "返品について", url: "#" },
      { name: "特定商取引法に基づく表記", url: "#" },
      { name: "プライバシーポリシー", url: "#" },
    ],
  },
  {
    id: 3,
    title: "Company",
    children: [
      { name: "お知らせ一覧", url: "#" },
      { name: "会社案内", url: "#" },
      { name: "採用情報", url: "#" },
      { name: "お問い合わせ", url: "#" },
    ],
  },
]);
const showLanguage = ref(false);
</script>

<style lang="sass" scoped></style>
