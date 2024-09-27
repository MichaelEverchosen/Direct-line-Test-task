<template>
  <div class='wrap'>
    <Header></Header>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
</style>