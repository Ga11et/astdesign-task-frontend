<template>
  <button>
    cart
  </button>
</template>

<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
</script>
