<template>
  <section>
    <div class="w-screen h-auto mx-auto mt-32">
      <h2 class="title">Online Shop</h2>
      <div
        class="w-screen"
        style="
          height: 48vh;
          background: url('https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_lineup_5_seasonal_resize_1950x.jpg?v=1636104382');
        "
      >
        <img class="w-screen" src="" alt="" />
      </div>
    </div>
  </section>
  <section>
    <div class="w-screen h-auto" style="padding: 90px 5vw 0">
      <h2 class="title">おすすめ商品</h2>
      <div class="w-full flex flex-wrap" style="padding: 40px 5vw 0">
        <div
          class="w-1/4 px-3 text-left hover:text-yellow-500"
          v-for="product in productList"
          :key="product.title"
        >
          <img class="w-screen" :src="product.imgUrl" alt="" />
          <div class="py-3 px-5">
            <p class="my-2 text-base transition-all">{{ product.title }}</p>
            <p class="text-xs text-yellow-500">
              {{ product.price.toLocaleString("en") }} <span>円 （税込）</span>
              <span v-if="product.price">~</span>
            </p>
          </div>
        </div>
      </div>
      <p href="#" class="pt-5 underline">すべてのおすすめ商品を見る</p>
    </div>
  </section>
  <section>
    <div style="padding: 90px 10vw 0">
      <h2 class="title">Company</h2>
      <ContentIntroduction :item="companyInfo" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import ContentIntroduction from "../../components/ContentIntroduction.vue";

const productList = ref([
  {
    title: "プレゼントキャンペーン 『あきつの酒』徳利",
    price: 0,
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_web_campaign_3_720x.jpg?v=1637392891",
  },
  {
    title: "プレゼントキャンペーン 有田焼酒器セット",
    price: 0,
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_web_campaign_1_720x.jpg?v=1637392911",
  },
  {
    title: "八反草・山田錦 純米吟醸 しぼりたて 直汲み 生酒 2本セット",
    price: 3520,
    imgUrl:
      " //cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_bottle_set_junmaiginjo_nama_720x.jpg?v=1637731372",
  },
  {
    title: "富久長 八反草 純米吟醸 直汲み 生酒",
    price: 1760,
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_junmaiginjo_nama_720x.jpg?v=1637731294",
  },
  {
    title: "富久長 山田錦 純米吟醸 直汲み 生酒",
    price: 1760,
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_yamadanishiki_junmaiginjo_nama_720x.jpg?v=1637731222",
  },
  {
    title: "富久長 八反草 純米 生酒",
    price: 1430,
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_junmai_nama_720x.jpg?v=1638520779 ",
  },
  {
    title: "富久長 八反草 純米吟醸  ハイブリッド生酛",
    price: 2200,
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmaiginjo_720x.jpg?v=1632964888 ",
  },
  {
    title: "富久長 八反草 純米 ハイブリッド生酛",
    price: 2200,
    imgUrl:
      "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/products/fukucho_hattanso_hybridkimoto_junmai_c3720d1c-9bfc-4629-a54f-d56e31ee7a43_720x.jpg?v=1632964797",
  },
]);
const companyInfo = ref({
  title: "会社案内",
  detail: "富久長の製造販売を行う株式会社今田酒造本店のご紹介。",
  imgUrl:
    "//cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_company_1_resize_720x.jpg?v=1634632459",
});
</script>

<style scoped>
.title {
  @apply mt-20 mb-20 text-2xl font-normal leading-6 tracking-widest text-yellow-700;
}
</style>
