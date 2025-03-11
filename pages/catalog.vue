<template>
  <main class="flex-1 container mx-auto mb-[120px]">
    <h1 class="font-[Inter] text-[2rem] font-bold mt-[2rem]">Тестовая задача</h1>
    <CatalogGrid :products="products" class="mt-[1.5rem]" />
  </main>
</template>

<script setup lang="ts">
const { data: products } = useAsyncData('catalog:products', () => catalog_api.fetch_products())
</script>
