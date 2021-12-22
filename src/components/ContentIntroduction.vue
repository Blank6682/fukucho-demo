<template>
  <div class="flex-col w-full mb-[100px]" :class="index % 2 == 0 ? 'flex ' : 'lg:flex-row-reverse'">
    <!-- 左边照片 -->
    <div class="w-full lg:w-3/5 h-auto min-h-[295px]">
      <img class="w-full h-full" :src="item.imgUrl" alt="" />
    </div>
    <!-- 描述 -->
    <div
      class="flex items-center w-full text-left lg:w-2/5 mt-[30px]"
      :style="{ marginLeft: index % 2 == 0 ? 'lg:5vw' : '' }"
    >
      <div>
        <h3 class="content-title">{{ item.title }}</h3>
        <p class="mt-5 mb-4 text-sm leading-7 lg:text-base">
          {{ item.detail }}
        </p>
        <div class="mt-[35px]">
          <a
            class="
              relative
              text-xs text-theme
              leading-7
              border border-solid border-theme
              cursor-pointer
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
  @apply text-[21px]  font-normal leading-6 tracking-[1px] text-black lg:text-[26px];
}
</style>
