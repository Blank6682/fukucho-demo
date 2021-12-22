<template>
  <Header :navList="navList" />

  <HomeShows />
  <!-- <DelayShow delay="4s" direction="top" distance="100px" class="z-50">
    <img src="../../assets/images//home-2.jpg" width="400" height="400" alt="" />
  </DelayShow> -->
  <HomeContents :newArticles="newArticles" :contents="contents" />
  <HomeOnlineShop />
  <SibeNavDrawer :navList="navList" />
  <Footer />
</template>

<script lang="ts" setup>
import Header from "../../components/page/header.vue";
import HomeShows from "./HomeShows.vue";
import HomeContents from "./HomeContents.vue";
import HomeOnlineShop from "./HomeOnlineShop.vue";
import Footer from "../../components/page/Footer.vue";
import DelayShow from "../../components/page/DelayShow.vue";

import SibeNavDrawer from "../../components/page/SibeNavDrawer.vue";
import { ref } from "@vue/reactivity";

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
