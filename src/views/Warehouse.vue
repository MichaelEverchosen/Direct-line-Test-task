<template>
  <div>
    <Filters></Filters>
    <ProductList :listType="null"></ProductList>
  </div>
</template>

<script setup lang="ts">
import Filters from '../components/Filters.vue';
import ProductList from '@/components/ProductList.vue';

</script>

<style lang="scss" scoped></style>