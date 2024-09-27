<template>
  <div class="header">
    <div class="header__top"></div>
    <div class="header__interface">
      <router-link to="favorites">
        <button class="header__link-page">
          <img
            class="header__image"
            src="../assets/icons/Featured.svg"
            alt=""
          >
          <p class="header__text">
            Избранное
          </p>
        </button>
      </router-link>
      <router-link to="/">
        <button class="header__link-page">
          <img
            class="header__image"
            src="../assets/icons/Warehouse.svg"
            alt=""
          >
          <p class="header__text">
            Склад
          </p>
        </button>
      </router-link>
      <router-link to="deals">
        <button class="header__link-page">
          <img
            class="header__image"
            src="../assets/icons/Deals.svg"
            alt=""
          >
          <p class="header__text">
            Сделки
          </p>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header {
  display: grid;

  &__top {
    padding-top: 40px;
    background-color: rgb(224, 227, 238);
    border: 1px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &__interface {
    text-align: center;
    padding: 20px 0px 60px;
    display: flex;
    justify-content: end;

  }

  &__link-page {
    background-color: white;
    padding: 8px 0;
    border: 1px;
    border-radius: 10px;
    width: 90px;

    &:hover {
      background-color: rgb(239, 239, 239, 0.5);

    }

  }

  &__image {
    height: 20px;
    width: 20px;
  }

  &__text {
    color: rgb(45, 59, 135);
    font-weight: 500;
    margin: 0px;
  }
}
</style>