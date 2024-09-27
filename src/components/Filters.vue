<template>
  <div class="filters">
    <div class="filters__groups">
      <button
        @click="activeFilter(null)"
        :class="{ 'filters__group--active': activeType === null }"
        class="filters__group"
      >
        Все типы
      </button>
      <button
        @click="activeFilter('Разовая продажа')"
        :class="{ 'filters__group--active': activeType === 'Разовая продажа' }"
        class="filters__group"
      >
        Прямые продажи
      </button>
      <button
        @click="activeFilter('Аукцион')"
        :class="{ 'filters__group--active': activeType === 'Аукцион' }"
        class="filters__group"
      >
        Аукцион
      </button>
    </div>
    <div class="filters__poisk">
      <input
        type="text"
        class="filters__input"
        @input="test"
      >
      <div>
        <button class="filters__search">
          <img
            src="../assets/icons/Magnifying-glass.svg"
            alt=""
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'
import { useStore } from 'vuex'
import type { TList } from '@/types/index.ts'

const store = useStore()

const activeType: Ref<TList> = ref(null)

interface InputEvent extends Event {
  target: HTMLInputElement;
}

const test = (event: InputEvent) => {
  store.commit('setSearch', event?.target?.value ?? '')
}

const activeFilter = (value: TList) => {
  store.commit('setProductType', value)
  activeType.value = value
}
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  justify-content: space-between;

  &__groups {
    background-color: #edeff6;
    padding: 15px;
    border: 1px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
  }


  &__group {
    font-size: 15px;
    font-weight: 400;
    color: #969DC3;
    background-color: #edeff6;
    padding: 0;
    border: 1px;

    &:hover {
      color: #2D3B87;
    }

    &--active {
      color: #2D3B87;
    }
  }



  &__poisk {
    display: flex;
    justify-content: center;
    margin-right: 10px;
    position: relative;
  }

  &__input {
    width: 250px;
    font-size: 15px;
    padding-left: 15px;
    border: 1px solid rgb(224, 227, 238);
    border-radius: 8px;

    &:focus {
      outline: none;
    }
  }

  &__search {
    width: 40px;
    height: 40px;
    background-color: rgb(45, 59, 135);
    border: 1px;
    border-radius: 10px;
    position: absolute;
    left: 225px;
    top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgb(32, 45, 118);
    }
  }

}
</style>