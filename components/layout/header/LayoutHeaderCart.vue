<template>
  <div class="flex items-center gap-x-3">
    <Icon name="material-symbols:shopping-basket-outline" class="text-[2rem]" />
    <p class="font-[Inter] text-[14px]">
      {{ amount }} {{ get_decimal_number(amount, ['товар', 'товара', 'товаров']) }}
    </p>
  </div>
</template>

<script setup lang="ts">
const amount = ref(12)
</script>
