<template>
  <!-- News -->
  <section>
    <div class="max-w-3xl mx-auto mt-32">
      <h2 class="title">News</h2>
      <div
        class="ml-auto border-b border-gray-200 border-solid py-3.5"
        v-for="article in newArticles"
        :key="article.id"
      >
        <img
          class="block object-cover w-full h-auto max-w-full mx-auto mb-5 cursor-pointer max-h-80"
          v-if="article.imgUrl"
          :src="article.imgUrl"
          alt=""
        />
        <div class="cursor-pointer hover:text-yellow-700">
          <div class="flex items-center text-sm leading-7 text-yellow-700">
            <p class="m-0">
              <time>{{ article.time }}</time>
            </p>
            <p class="ml-2.5">
              <span
                class="
                  text-xs text-center text-yellow-700
                  border border-gray-200 border-solid
                  py-0.5
                  px-1.5
                "
              >
                {{ article.tags }}
              </span>
            </p>
          </div>
          <h3 class="text-left text-base leading-7 mt-1.5 font-medium">
            {{ article.title }}
          </h3>
        </div>
      </div>
      <div
        class="mt-10 text-base leading-7 text-center underline cursor-pointer hover:text-yellow-700"
      >
        すべてのお知らせを見る
      </div>
    </div>
  </section>
  <!-- Contents -->
  <section>
    <div style="margin: 120px 10vw 0">
      <h2 class="title">Contents</h2>
      <div class="flex w-full my-24" v-for="(item, index) in contents" :key="item.id">
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
              class="flex items-center justify-between p-2 text-sm text-yellow-700 border border-yellow-700 cursor-pointer  w-44 hover:bg-yellow-700 hover:text-white"
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
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  contents: {
    type: Array,
    default: () => [],
  },
  newArticles: {
    type: Array,
    defalut: [],
  },
});
</script>

<style scoped>
.title {
  @apply mt-20 mb-20 text-2xl font-normal leading-6 tracking-widest text-yellow-700;
}

.content-title {
  @apply text-2xl font-normal leading-6 tracking-widest text-black;
}
</style>
