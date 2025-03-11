<template>
  <div class="flex items-end gap-[0.25rem]">
    <p class="font-[Golos_Text] font-bold leading-none">{{ formatPrice(product.newPrice) }} ₽</p>
    <p v-if="product.oldPrice" class="font-[Inter] text-[12px] text-[#999999] line-through leading-none">
      {{ formatPrice(product.oldPrice) }} ₽
    </p>
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
