<template>
  <div class="flex w-full my-24">
    <!-- 左边照片 -->
    <div class="w-3/5 h-auto" v-if="index % 2 == 0">
      <img class="w-full h-full" :src="item.imgUrl" alt="" />
    </div>
    <!-- 描述 -->
    <div
      class="flex items-center w-2/5 text-left"
      :style="{ marginLeft: index % 2 == 0 ? '5vw' : '' }"
    >
      <div>
        <h3 class="content-title">{{ item.title }}</h3>
        <p class="mt-5 mb-10">
          {{ item.detail }}
        </p>
        <div
          class="
            flex
            items-center
            justify-between
            p-2
            text-sm text-yellow-700
            border border-yellow-700
            cursor-pointer
            w-44
            hover:bg-yellow-700 hover:text-white
          "
        >
          <span>詳しく見る</span>
          <img
            class="w-4 h-auto"
            src="//cdn.shopifycdn.net/s/files/1/0587/1052/4079/t/4/assets/icon_arrow_disc_primary.svg?v=3"
            alt=""
          />
        </div>
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
  @apply text-2xl font-normal leading-6 tracking-widest text-black;
}
</style>
