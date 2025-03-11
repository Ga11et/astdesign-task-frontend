<template>
  <p class="font-[Golos_Text] text-[12px] font-semibold uppercase leading-none truncate">
    {{ product?.brand }}
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
