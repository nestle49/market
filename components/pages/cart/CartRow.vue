<template lang="pug">
  .cart-row.d-flex
    .cart-row__image.d-flex.justify-content-center.align-items-center.overflow-hidden
      img(v-if="product.image" :src="product.image").object-fit-contain
    .cart-row__content.d-flex.flex-column
      p(v-if="product.title").cart-row__title {{ product.title }}
      p(v-if="product.price").cart-row__price {{ product.price }}$
      p(v-if="product.count").cart-row__count Count: {{ product.count }}
      .cart-row__tools.d-flex
        btn(icon="add_shopping_cart" @click.prevent.native="addItemToCart")
        btn(v-if="product.count" icon="remove_shopping_cart" @click.prevent.native="removeItemFromCart")
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import Btn from "~/components/Button.vue"
import ProductStorage from '~/types/productStorage'
import { CART } from '~/constants'
@Component({
  components: {
    Btn,
  }
})
export default class Card extends Vue {
  /*
   * TODO: Maybe change decorators to classic props
   */
  @Prop({ default: () => {} }) readonly product!: any

  @Emit('recalculate')
  addItemToCart() {
    const productId: number = this.product.id
    let products: ProductStorage[] = [];
    const cart: string | null = sessionStorage.getItem(CART)

    if (cart) {
      products = [...JSON.parse(cart)]
      const i: number = products.findIndex(e => e.id === productId)
      i !== -1 ? products[i].count++ : products.push({id: productId, count: 1})
    } else {
      products.push({id: productId, count: 1})
    }
    sessionStorage.setItem(CART, JSON.stringify(products))
  }

  @Emit('recalculate')
  removeItemFromCart() {
    const productId: number = this.product.id
    let products: ProductStorage[] = [];
    const cart: string | null = sessionStorage.getItem(CART)

    if (cart) {
      products = [...JSON.parse(cart)]
      const i: number = products.findIndex(e => e.id === productId)
      if (i !== -1) products[i].count > 1 ? products[i].count-- : products = products.filter(e => e.id !== productId)
    }

    sessionStorage.setItem(CART, JSON.stringify(products))
  }
}
</script>
<style lang="scss" scoped>
.cart-row {
  padding: 0 0 40px;
  margin: 0 0 40px;
  border-bottom: 1px solid #f0f0f0;
  &:last-of-type {
    margin: 0 0 20px;
  }
  &__image {
    width: 150px;
    height: 150px;
    margin: 0 40px 0 0;
    & img {
      max-height: 100%;
    }
  }
  &__title {
    color: #5cbf96; // TODO: variables for colors
    font-weight: bold;
    font-size: 18px;
    margin: 0 0 10px;
  }
  &__price {
    font-size: 23px;
    font-weight: bold;
    margin: 0 0 20px;
    color: #2d565e; // TODO: variables for colors
  }
  &__count {
    font-size: 20px;
  }
  &__tools {
    margin: auto 0 0;
  }
}
</style>


