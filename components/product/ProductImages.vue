<template>
  <div class="pt-[100%] relative">
    <img :src="product.image" class="absolute left-0 top-0 w-[100%] h-[100%] object-cover rounded-xl bg-gray-200">
  </div>
</template>

<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
</script>
