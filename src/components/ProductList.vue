<template>
  <div class="product-lists">
    <div
      v-for="product in productList"
      :key="product.id"
    >
      <Product :data="product" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import Product from '@/components/Product.vue';

const props = defineProps({
  listType: {
    type: String,
    default: null
  }

})

const store = useStore()
store.dispatch('getProductsFromApi')
const productList = computed(() => store.getters.getProductList(props.listType))


</script>

<style lang="scss" scoped>
.product-lists {
  margin: 0px 30px 0 20px;
  padding: 30px 0px;
  display: grid;
  gap: 25px;
}
</style>