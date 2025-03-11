<template>
  <p class="font-[Inter] text-[14px] leading-none truncate h-[28px]">
    {{ product.name }}
  </p>
</template>

<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
</script>
