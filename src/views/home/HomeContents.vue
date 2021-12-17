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
      <template v-for="(item, index) in contents" :key="item.id">
        <ContentIntroduction :item="item" :index="index" />
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ContentIntroduction from "../../components/ContentIntroduction.vue";
import { ContentType } from "./type";

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
</style>
