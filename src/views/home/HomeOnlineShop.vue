<template>
  <section>
    <div class="w-full h-auto mx-auto mt-20 md:mt-[120px]">
      <h2 class="title">Online Shop</h2>
      <div
        class="
          relative
          w-full
          min-h-[240px]
          h-[330px]
          md:min-h-[307px] md:h-[500px]
          overflow-hidden
        "
      >
        <div class="relative w-full h-full">
          <div id="online-bg"></div>
        </div>

        <div
          class="
            absolute
            left-[0px]
            bottom-[0px]
            m-[30px]
            max-w-[50%]
            text-left
            mdtext-center
            text-white
            transform
            z-[50]
            md:m-[50px]
            md:left-1/2
            md:top-1/2
            md:-translate-x-1/2
            md:-translate-y-1/2
            md:text-center
          "
        >
          <p class="text-xl md:text-[32px]">オンラインショップ</p>
          <p class="text-sm mt-[0.875em] leading-6 mb-6">
            富久長のお酒のほか <br />
            おすすめの酒器やセット商品などを<br />
            ご注文いただけます。
          </p>
          <a
            href="#"
            class="
              text-sm
              border border-solid border-white
              py-[9px]
              px-4
              leading-[.12em]
              bg-transparent
              hover:bg-white hover:text-black
              transition-colors
            "
          >
            すべての商品を見る
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- 商品区 -->
  <section>
    <div class="w-full h-auto pt-[90px] px-[20px] md:px-[5vw]">
      <h2 class="title">おすすめ商品</h2>
      <div class="w-full flex flex-wrap pt-[40px] px-0 md:px-[5vw]">
        <div
          class="w-1/2 px-[10px] text-left md:w-1/4 hover:text-theme transition-colors"
          v-for="product in productList"
          :key="product.title"
        >
          <img class="w-full" :src="product.imgUrl" alt="" />
          <div class="py-[9px] px-[18px]">
            <p class="mt-[7px] mb-1 text-sm leading-6 transition-all md:text-base">
              {{ product.title }}
            </p>
            <p class="text-[10px] leading-7 text-theme md:text-[13px]">
              {{ product.price.toLocaleString("en") }} <span>円 （税込）</span>
              <span v-if="product.price">~</span>
            </p>
          </div>
        </div>
      </div>
      <p href="#" class="pt-5 text-sm underline">すべてのおすすめ商品を見る</p>
    </div>
  </section>
  <section>
    <div class="pt-[80px] px-[30px] md:pt-[90px]md:px-[10vw]">
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
  @apply m-0 p-0 text-xl md:text-[26px] font-normal leading-6 tracking-[1px] text-theme first:mb-20;
}
#online-bg {
  @apply absolute top-0 right-0 z-[1] w-full h-full min-h-full;
  background: url("https://cdn.shopifycdn.net/s/files/1/0587/1052/4079/files/fukucho_web_lineup_5_seasonal_resize_1950x.jpg?v=1636104382")
    center center;
  background-size: cover;
}
</style>
