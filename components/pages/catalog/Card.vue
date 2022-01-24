<template lang="pug">
  .card.d-flex.flex-column
    .card__image.d-flex.justify-content-center.align-items-center.overflow-hidden
      //-
        suppose fields api always exist, but can empty strings,
        do not take count items, because fake api, can't change count in database
      img(v-if="product.image" :src="product.image").object-fit-contain
    p(v-if="product.title").card__title {{ product.title }}
    ul(v-if="product.rating.rate").rating.d-flex
      //-
        TODO: create component rating
      li(v-for="index in 5" :key="index").rating__star.d-inline-flex.justify-content-center.align-items-center
        //-
          TODO: create svg component or change assets
        svg(v-if="index <= product.rating.rate" xmlns="http://www.w3.org/2000/svg"
          width="13.333"
          height="12.667"
          viewBox="0 0 13.333 12.667")
          path(d="M8.667,12.18l4.12,2.487L11.693,9.98l3.64-3.153L10.54,6.42,8.667,2,6.793,6.42,2,6.827,5.64,9.98,4.547,14.667Z"
            transform="translate(-2 -2)"
            fill="#ffeb67")
        svg(v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16")
          path(d="M0,0H16V16H0Z" fill="none")
          path(d="M15.333,6.827,10.54,6.413,8.667,2,6.793,6.42,2,6.827,5.64,9.98,4.547,14.667l4.12-2.487,4.12,2.487L11.7,9.98ZM8.667,10.933,6.16,12.447l.667-2.853L4.613,7.673l2.92-.253L8.667,4.733l1.14,2.693,2.92.253L10.513,9.6l.667,2.853Z"
            transform="translate(-0.667 -0.667)"
            fill="#d5cfa9")
    p(v-if="product.price").card__price {{ product.price }}$
    p(v-if="product.category").card__category {{ product.category }}
    p(v-if="product.description").card__description {{ product.description }}
    .card__tools.d-flex
      Link(to="/cart/" text="Checkout")
      btn(icon="add_shopping_cart" @click.prevent.native="addItemToCart")
      btn(icon="remove_shopping_cart" @click.prevent.native="removeItemFromCart")
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Link from '@/components/Link.vue'
import Btn from "~/components/Button.vue";
import ProductStorage from '~/types/productStorage'
import { CART } from '~/constants'
@Component({
  components: {
    Btn,
    Link
  }
})
export default class Card extends Vue {
  /*
   * TODO: Maybe change decorators to classic props
   */
  @Prop({ default: () => {} }) readonly product!: any

  addItemToCart(): void {
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
  removeItemFromCart(): void {
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
.card {
  width: 100%;
  max-width: calc((100% - 60px) / 3);
  margin: 0 20px 40px 0;
  @include media('<tablet') {
    max-width: 100%;
    margin: 0 0 40px;
  }
  &__image {
    height: 200px;
    margin: 0 0 10px;
    & img {
      max-height: 100%;
    }
  }
  &__category {
    font-weight: bolder;
    color: #9f9f9f; // TODO: variables for colors
    margin: 0 0 5px;
  }
  &__title {
    color: #5cbf96; // TODO: variables for colors
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &__description {
    margin: 0 0 10px;
    font-size: 14px;
  }
  &__price {
    font-size: 23px;
    font-weight: bold;
    margin: 0;
    color: #2d565e; // TODO: variables for colors
  }
  &__tools {
    margin: auto 0 0;
  }
}
.rating {
  margin: 5px 0;
  padding: 0;
  &__star {
    width: 16px;
    height: 16px;
  }
}
</style>


