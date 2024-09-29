<template>
  <div class="product-lists">
    <Product
      v-for="product in productList"
      :key="product.id"
      :data="product"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Product from '@/components/Product.vue';
import { useStore } from 'vuex'
import type { IProduct, TRoute } from '@/types/index.ts'

const props = withDefaults(defineProps<{
  listType: TRoute
}>(), {
  listType: null
})

const store = useStore()
store.dispatch('getProductsFromApi')
const productList = computed<IProduct[]>(() => store.getters.getProductList(props.listType))


</script>

<style lang="scss" scoped>
.product-lists {
  margin: 0px 30px 0 20px;
  padding: 30px 0px;
  display: grid;
  gap: 25px;
}
</style>