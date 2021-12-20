<template>
  <header>
    <div
      id="head"
      class="top-0 z-50 flex justify-between w-full px-[50px] lg:px-5 text-black bg-transparent"
      :class="isScroll ? 'fixed' : 'absolute'"
      style="height: 72px"
    >
      <!-- logo -->
      <div class="flex items-center justify-center h-full">
        <a class="block w-[190px]">
          <img
            src="//cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/logo_header_white_900x.png?v=1637369622"
            alt=""
          />
        </a>
      </div>
      <!-- 导航栏 -->
      <div class="hidden lg:flex">
        <nav class="flex h-full">
          <div
            class="hover:border-theme hover:border-b-2"
            v-for="(item, index) in navList"
            :key="'navTitle' + index"
          >
            <a
              href=""
              class="
                flex
                items-center
                justify-center
                h-full
                pt-5
                px-5
                pb-[15px]
                text-sm
                font-normal
                text-white
              "
              ><span>{{ item.title }}</span>
            </a>
          </div>
        </nav>
      </div>
      <!-- 右侧图标 -->
      <div class="flex">
        <a
          href=""
          class="
            flex
            items-center
            justify-center
            pr-[10px]
            lg:px-[11px] lg:py-[5px]
            text-center
            align-middle
          "
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="mt-[3px] text-white icon icon-search"
            height="25"
            viewBox="0 0 25 25"
            width="25"
          >
            <path
              d="m22.85 21.78a.17.17 0 0 0 0-.23l-5.36-5.36a.17.17 0 0 1 0-.23 8.66 8.66 0 1 0 -12.84.65 8.66 8.66 0 0 0 11.6.59.15.15 0 0 1 .22 0l5.36 5.35a.17.17 0 0 0 .23 0zm-12.09-4.08a7.21 7.21 0 1 1 5.1-2.11 7.2 7.2 0 0 1 -5.1 2.11z"
            ></path>
          </svg>
        </a>

        <a
          href=""
          class="
            flex
            items-center
            justify-center
            pr-[10px]
            lg:px-[11px] lg:py-[5px]
            text-center
            align-middle
          "
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="[3px] text-white icon icon-account"
            height="25"
            viewBox="0 0 25 25"
            width="25"
          >
            <path
              d="m12.51 13.49a4.31 4.31 0 1 0 -3-7.35 4.31 4.31 0 0 0 0 6.09 4.29 4.29 0 0 0 3 1.26zm-2.12-6.44a3 3 0 0 1 2.12-.87 3 3 0 0 1 2.13.87 3 3 0 1 1 -4.25 0z"
            ></path>
            <path
              d="m12.51 1.83a10.4 10.4 0 1 0 10.4 10.4 10.41 10.41 0 0 0 -10.4-10.4zm0 1.3a9.1 9.1 0 0 1 7.42 14.37.15.15 0 0 1 -.22 0 10.36 10.36 0 0 0 -14.4 0 .14.14 0 0 1 -.21 0 9 9 0 0 1 -1.69-5.27 9.11 9.11 0 0 1 9.1-9.1zm0 18.2a9.1 9.1 0 0 1 -6.34-2.58.16.16 0 0 1 0-.23 9.07 9.07 0 0 1 12.69 0 .17.17 0 0 1 0 .23 9.1 9.1 0 0 1 -6.35 2.58z"
            ></path>
          </svg>
        </a>
        <a
          href=""
          class="flex items-center justify-center lg:pl-[11px] lg:py-[5px] text-center align-middle"
        >
          <svg
            viewBox="0 0 25 25 "
            aria-hidden="true"
            focusable="false"
            role="presentation"
            class="mt-[3px] text-white icon icon-cart"
            width="25"
            height="25"
          >
            <path
              d="m21.62 17.29a.19.19 0 0 0 .2-.16l2.47-10a.13.13 0 0 0 -.12-.16h-14.91a.14.14 0 0 0 -.13.16l.22 1a.19.19 0 0 0 .19.16h13a.13.13 0 0 1 .12.16l-1.86 7.38a.19.19 0 0 1 -.2.16h-12.18a.19.19 0 0 1 -.2-.16l-3-13.32a.2.2 0 0 0 -.22-.15h-4.46a.13.13 0 0 0 -.13.15l.21 1a.2.2 0 0 0 .2.15h3.18a.2.2 0 0 1 .2.16l3 13.32a.21.21 0 0 0 .2.16z"
            ></path>
            <path
              d="m9.09 18.61a2.27 2.27 0 1 0 2.27 2.27 2.28 2.28 0 0 0 -2.27-2.27zm0 3.25a1 1 0 1 1 0-1.95 1 1 0 0 1 0 1.95z"
            ></path>
            <path
              d="m19.9 18.61a2.27 2.27 0 1 0 2.27 2.27 2.27 2.27 0 0 0 -2.27-2.27zm0 3.25a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"
            ></path>
          </svg>
        </a>
      </div>
      <div
        class="
          fixed
          right-3
          bottom-3
          w-[60px]
          h-[60px]
          rounded-full
          bg-white
          shadow-sm
          z-50
          border border-solid border-gray-300
        "
      >
        <span class="w-1/2 h-[1px] border border-solid border-theme mb-1"> 111</span>
        <span class="w-1/2 border border-solid border-theme mb-1"></span>
        <span class="w-1/2 border border-solid border-theme mb-1"></span>
      </div>
    </div>

    <!-- <button class="fixed z-50">点击获取</button> -->
  </header>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import GetElementPosition from "../../hooks/GetElementPosition";

const navList = ref([
  {
    title: "お知らせ",
    children: [],
  },
  {
    title: "富久長の想い",
    children: [],
  },
  {
    title: "富久長の酒",
    children: [
      {
        title: "すべてのお酒",
        children: [
          {
            title: "八反草のお酒",
          },
          {
            title: "海風土シリーズ",
          },
          {
            title: "HENPEI & GENKEI",
          },
          {
            title: "ロングセラー",
          },
          {
            title: "季節限定酒",
          },
          {
            title: "LEGACYシリーズ",
          },
        ],
      },
      {
        title: "海外輸出商品",
        children: [
          {
            title: "アメリカ",
          },
          {
            title: "ヨーロッパ",
          },
          {
            title: "アジア",
          },
        ],
      },
    ],
  },
  {
    title: "取扱店",
    children: [],
  },
  {
    title: "オンラインショップ",
    children: [
      {
        title: "キャンペーン・おすすめ商品",
        children: [
          {
            title: "キャンペーン",
          },
          {
            title: "おすすめ商品",
          },
          {
            title: "生酒商品",
          },
        ],
      },
      {
        title: "すべてのお酒",
        children: [
          {
            title: "八反草のお酒",
          },
          {
            title: "海風土シリーズ",
          },
          {
            title: "HENPEI & GENKEI",
          },
          {
            title: "ロングセラー",
          },
          {
            title: "季節限定酒",
          },
          {
            title: "LEGACYシリーズ",
          },
        ],
      },
      {
        title: "ギフト・セット商品",
        children: [
          {
            title: "セット商品",
          },
          {
            title: "箱入り商品",
          },
          {
            title: "ギフト包装・紙袋",
          },
        ],
      },
      {
        title: "グッズ",
        children: [
          {
            title: "酒器",
          },
          {
            title: "その他",
          },
        ],
      },
    ],
  },
]);

const isScroll = ref(false);
let el: HTMLElement | null;
let position: DOMRect | undefined;
onMounted(() => {
  el = document.getElementById("head");
  document.addEventListener(
    "scroll",
    () => {
      position = GetElementPosition(el);
      console.log(position);
      if (position && position.y < 0) {
        isScroll.value = true;
      } else if (position && !position.y) {
        isScroll.value = false;
      }
    },
    false
  );
});
</script>

<style></style>
