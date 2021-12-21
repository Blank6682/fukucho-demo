<template>
  <div class="delay-item" v-cloak>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  delay: {
    type: String,
    default: () => 0,
  },
  direction: {
    type: String,
    default: () => "top",
  },
  distance: {
    type: String,
    default: () => "10px",
  },
});
</script>

<style scoped>
.delay-item {
  animation: v-bind("direction") 4s ease v-bind("delay") 1;
}

@keyframes top {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes bottom {
  0% {
    opacity: 0;
    transform: translateY(v-bind("distance"));
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes left {
  0% {
    opacity: 0;
    transform: translateX("-" + v-bind("distance"));
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes right {
  0% {
    opacity: 0;
    transform: translateX(v-bind("distance"));
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
