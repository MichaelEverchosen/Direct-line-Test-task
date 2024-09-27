<template>
  <div class="product">
    <div class="product__information">
      <img
        class="product__image"
        src="../assets/image/Image.svg"
        alt=""
      >
      <div>
        <div class="product__type">{{ data.type }}</div>
        <div class="product__name">{{ data.name }}</div>
        <div class="product__city">
          <div>
            <img
              src="@/assets/icons/PointStay.svg"
              alt=""
            >
          </div>
          <div>{{ data.city }}</div>
        </div>
        <div class="product__salesman">
          Продавец:
          <div class="product__salesman-company">{{ data.salesman }}</div>
        </div>
        <div class="product__parameter">
          <div class="product__view-product">Вид товара</div>
          <div class="product__type-product">{{ data.parameter }}</div>
        </div>
        <div class="product__description">{{ data.description }}</div>
      </div>
    </div>
    <div class="product__sale">
      <div>
        <div class="product__price">{{ data.price }} P <img
            src=""
            alt=""
          ></div>
        <div class="product__quantity">
          Количество
          <div class="product__count">
            {{ data.quantity }} шт.
          </div>
        </div>
        <div class="product__price-piece">
          Стоимость за штуку
          <div class="product__sum">
            {{ data.pricePiece }} P <img
              src=""
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="product__actions">
        <button
          v-if="router.currentRoute.value.name === 'deals'"
          @click="pay"
          class="product__pay"
          :disabled="textPayButton === 'Оплачено'"
        >{{ textPayButton }}</button>
        <button
          v-else
          @click="addDeal"
          class="product__add"
        >{{ textDealButton }}</button>
        <button
          @click="addFavorite"
          class="product__favorite"
          :class="{ 'product__favorite--active': isFavorite }"
        >
          <img
            :src="`src/assets/icons/${isFavorite ? 'FeaturedWhite' : 'Featured'}.svg`"
            alt=""
          >
        </button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

interface IProduct {
  id: number,
  image: string,
  type: string,
  name: string,
  city: string,
  salesman: string,
  parameter: string,
  description: string,
  price: number,
  quanity: number,
  pricePiece: number
}

interface Props {
  data: IProduct,
}

const props = defineProps<Props>()
// const props = defineProps({
//   data: {
//     type: Object,
//     default: () => ({})
//   }
// })

const isDeal = computed(() => store.getters.getDealStatus(props.data.id))
const isFavorite = computed(() => store.getters.getFavoriteStatus(props.data.id))

const textDealButton = computed(() => {
  let text = ''
  if (isDeal.value) {
    text = 'Убрать из сделки'
  } else {
    text = 'Добавить в сделки'
  }
  return text
})
const textPayButton = ref('Оплатить')
const pay = () => textPayButton.value = 'Оплачено'

const addDeal = () => store.commit('toggleDeal', props.data.id)
const addFavorite = () => store.commit('toggleFavorite', props.data.id)
</script>

<style lang="scss" scoped>
.product {
  color: rgb(45, 59, 135);
  font-size: 13px;
  font-weight: 400;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 20px;
  display: flex;
  gap: 10px;
  justify-content: space-between;

  &__information {
    padding: 20px 0 0 20px;
    display: flex;
    gap: 20px;
  }

  &__image {
    max-height: 256px;
    max-width: 256px;
    border: 1px;
    border-radius: 10px;
  }

  &__type {
    color: rgb(150, 157, 195);
    padding-bottom: 20px;
  }

  &__name {
    padding-bottom: 30px;
    font-size: 15px;
    font-weight: 500;
  }

  &__city {
    color: rgb(97, 108, 165);
    font-weight: 400;
    background-color: rgb(244, 245, 249);
    padding: 5px 8px;
    margin-bottom: 10px;
    max-width: 230px;
    border: 1px;
    border-radius: 10px;
    display: flex;
    gap: 5px;
  }

  &__salesman {
    color: rgb(150, 157, 195);
    margin-bottom: 10px;
    display: flex;

  }

  &__salesman-company {
    color: rgb(45, 59, 135);
  }

  &__parameter {
    color: rgb(97, 108, 165);
    padding: 8px;
    margin-bottom: 15px;
    background-color: rgb(244, 245, 249);
    max-width: 124px;
    border: 1px;
    border-radius: 10px;
    display: grid;
    gap: 5px;

  }

  &__view-product {
    color: #969DC3;

  }

  &__description {
    font-size: 13px;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    box-orient: vertical;
  }

  &__sale {
    padding: 15px;
    border: 1px solid rgb(236, 236, 236);
    border-radius: 20px;
    display: grid;
    gap: 200px;
    max-width: 340px;
  }

  &__price {
    font-size: 20px;
    font-weight: 500;
  }

  &__quantity {
    color: rgb(150, 157, 195);
    padding: 10px 0 5px 0;
    display: flex;
    justify-content: space-between;


  }

  &__count {
    color: rgb(45, 59, 135);
  }

  &__price-piece {
    color: rgb(150, 157, 195);
    display: flex;
    justify-content: space-between;
  }

  &__sum {
    color: rgb(45, 59, 135);
  }

  &__actions {
    padding: 10px;
    display: flex;
    gap: 10px;

  }

  &__pay {
    background-color: #4fc66b;
    color: #ffffff;

    font-size: 15px;
    font-weight: 500;
    width: 200px;
    padding: 15px;
    border: 1px;
    border-radius: 10px;

    &:hover {
      background-color: #5eb773;
    }

    &:disabled {
      color: #969DC3;
      background-color: #FFFFFF;
      border: 1px solid #E0E3EE;
    }
  }

  &__add {
    color: rgb(45, 59, 135);
    font-size: 15px;
    font-weight: 500;
    width: 220px;
    padding: 15px;
    border: 1px;
    border-radius: 8px;

    &:hover {
      background-color: rgb(230, 230, 233);
    }
  }


  &__favorite {
    padding: 18px;
    border: 1px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: rgb(230, 230, 233);
    }

    &--active {
      background-color: rgb(45, 59, 135);

      &:hover {
        background-color: rgb(63, 78, 162);
      }
    }
  }
}
</style>