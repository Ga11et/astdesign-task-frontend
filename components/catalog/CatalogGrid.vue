<template>
  <div class="grid gap-[30px] grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});
</script>
