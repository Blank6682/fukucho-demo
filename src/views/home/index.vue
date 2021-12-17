<template>
  <Header />
  <HomeShows />
  <HomeContents :newArticles="newArticles" :contents="contents" />
  <HomeOnlineShop />
  <Footer />
</template>

<script lang="ts" setup>
import Header from "../../components/common/Header.vue";
import HomeShows from "./HomeShows.vue";
import HomeContents from "./HomeContents.vue";
import HomeOnlineShop from "./HomeOnlineShop.vue";
import Footer from "../../components/common/Footer.vue";

import { ref } from "@vue/reactivity";

const newArticles = ref([
  {
    id: Math.random(),
    title: "ウェブサイトリニューアル記念 プレゼントキャンペーンを実施中！",
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/articles/fukuucho_blog_2_1728_1080x.jpg?v=1638141710",
    time: "2021.11.24",
    tags: "キャンペーン",
  },
  {
    id: Math.random(),
    title: "【採用情報】　パートタイム、アルバイト募集",
    imgUrl: "",
    time: "2021.11.23",
    tags: "お知らせ",
  },
  {
    id: Math.random(),
    title: "富久長ウェブサイトリニューアルオープンしました。",
    imgUrl: "",
    time: "2021.11.22",
    tags: "お知らせ",
  },
]);

const contents = ref([
  {
    id: 1,
    title: "富久長の想い",
    detail: "土地のこと、造りのこと、米のこと、そこに宿る想い、富久長が大切にしていること。",
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukuucho_web_top_slide_4_resize_720x.jpg?v=1634633224",
  },
  {
    id: 2,
    title: "富久長の酒",
    detail: "富久長が唯一醸す八反草のお酒や海風土シリーズなど富久長のラインナップのご紹介。",
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_lineup_4_longseller_resize_720x.jpg?v=1634823209",
  },
  {
    id: 3,
    title: "取扱店",
    detail: "国内の酒販店、世界の販売拠点となっている会社のご紹介。",
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_stocklist_resize_720x.jpg?v=1634632423",
  },
]);
</script>

<style scoped></style>
