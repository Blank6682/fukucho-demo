<template>
  <!-- News -->
  <section>
    <div class="max-w-[48vw] mx-auto mt-[120px]">
      <h2 class="title">News</h2>
      <div
        class="ml-auto border-b border-gray-300 border-solid py-[13px]"
        v-for="article in newArticles"
        :key="article.id"
      >
        <img
          class="block object-cover w-full h-auto max-w-full mx-auto mb-5 cursor-pointer max-h-80"
          v-if="article.imgUrl"
          :src="article.imgUrl"
          alt=""
        />
        <div class="cursor-pointer hover:text-theme">
          <div class="flex items-center text-sm leading-7 text-theme">
            <p class="m-0">
              <time>{{ article.time }}</time>
            </p>
            <p class="ml-2.5">
              <span
                class="
                  text-xs text-center text-theme
                  border border-gray-300 border-solid
                  leading-4
                  py-0.5
                  px-[5px]
                "
              >
                {{ article.tags }}
              </span>
            </p>
          </div>
          <h3 class="text-left text-base leading-7 mt-[5px] font-medium">
            {{ article.title }}
          </h3>
        </div>
      </div>
      <div class="mt-10 text-sm leading-7 text-center underline cursor-pointer hover:text-theme">
        すべてのお知らせを見る
      </div>
    </div>
  </section>
  <!-- Contents -->
  <section>
    <div class="mt-[120px] mx-[10vw] min-h-[297px]">
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
    defalut: () => [],
  },
});
</script>

<style scoped>
.title {
  @apply m-0 p-0 text-[26px] font-normal leading-6 tracking-[1px] text-theme first:mb-20;
}
</style>
