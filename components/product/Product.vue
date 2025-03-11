<template>
  <div class="relative">
    <div
      class="transition-padding z-1 bg-white left-[-24px] w-[100%] h-[100%] hover:p-6 hover:pb-[76px] hover:absolute top-[-24px] hover:w-[calc(100%_+_48px)] hover:h-[calc(100%_+_24px_+_76px)] hover:z-2 hover:shadow-[0px_10px_40px_#0000001A] hover:rounded-[1rem]">
      <ProductImages :product="product" />
      <ProductPrice :product="product" class="mt-[0.75rem]" />
      <ProductBrand :product="product" class="mt-[3px]" />
      <ProductTitle :product="product" class="mt-[3px]" />
      <!-- <ProductCart :product="product" class="mt-[3px]" /> -->
    </div>
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
