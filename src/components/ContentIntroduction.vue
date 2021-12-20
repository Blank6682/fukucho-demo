<template>
  <div class="flex w-full mb-[100px]">
    <!-- 左边照片 -->
    <div class="w-3/5 h-auto minxh-[295px]" v-if="index % 2 == 0">
      <img class="w-full h-full" :src="item.imgUrl" alt="" />
    </div>
    <!-- 描述 -->
    <div
      class="flex items-center w-2/5 text-left"
      :style="{ marginLeft: index % 2 == 0 ? '5vw' : '' }"
    >
      <div>
        <h3 class="content-title">{{ item.title }}</h3>
        <p class="mt-5 mb-4 text-base leading-7">
          {{ item.detail }}
        </p>
        <a
          class="
            relative
            text-xs text-theme
            leading-7
            border border-solid border-theme
            cursor-pointer
            mt-[25px]
            py-[10px]
            pr-[105px]
            pl-[15px]
            font-semibold
            hover:bg-theme hover:text-white
            transition-colors
          "
        >
          <span>詳しく見る</span>
          <img
            class="w-4 h-auto absolute right-[10px] top-1/2 transform -translate-y-1/2"
            src="//cdn.shopifycdn.net/s/files/1/0587/1052/4079/t/4/assets/icon_arrow_disc_primary.svg?v=3"
            alt=""
          />
        </a>
      </div>
    </div>
    <!-- 右边照片 -->
    <div class="w-3/5 h-auto" v-if="index % 2" :style="{ marginLeft: index % 2 ? '5vw' : '' }">
      <img class="w-full h-full" :src="item.imgUrl" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  index: {
    type: Number,
    default: () => 0,
  },
});
</script>

<style scoped>
.content-title {
  @apply text-[26px] font-normal leading-6 tracking-[1px] text-black;
}
</style>
