<template lang="pug">
  section.catalog
    .container
      h1 Cart
      .cart-list.d-flex.flex-column(v-if="cart.length")
        cart-row(v-for='product in cart', :key='product.id' :product="product" @recalculate="getCartProducts")
      .cart-list__text.d-flex.justify-content-center(v-else) No items added to cart
      .cart-list__total.d-flex.justify-content-between.align-items-center(v-if="totalCost")
        btn(icon="shopping_cart" @click.native="checkout")
        .cart-list__total-cost {{ totalCost }}$
    modal(:is-visible-modal="isVisibleModal" :modal-text="modalText" @close="closePopup")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { productsStore } from '~/store'
import CartRow from '@/components/pages/cart/CartRow.vue'
import Modal from '@/components/pages/cart/Modal.vue'
import Btn from "~/components/Button.vue";
import { CART } from '~/constants'
@Component({
  components: {
    CartRow,
    Btn,
    Modal,
  },
})
export default class Cart extends Vue {
  cart: any[] = [];
  isVisibleModal: boolean = false;
  modalText: string = '';

  async fetch () {
    await productsStore.fetchProducts()
  }

  get products () { /* mapGetters exist for class api?  */
    return productsStore.products
  }

  get totalCost(): string {
    return this.cart.reduce((sum: number, product: any) => sum + product.price * product.count, 0).toFixed(2)
  }

  checkout() {
    this.isVisibleModal = true
    this.modalText = 'Successfully';
  }

  closePopup() {
    this.isVisibleModal = false
    this.modalText = '';
  }

  getCartProducts () {
    let products: any[] = [];
    const cart: any = sessionStorage.getItem(CART)
    if (cart) products = [...JSON.parse(cart)]

    const productsDetailed = products.map(product => {
      return { ...this.products.find(e => e.id === product.id), count: product.count }
    });

    this.cart = productsDetailed
  }

  mounted() {
    this.getCartProducts()
  }
}
</script>
<style lang="scss" scoped>
.cart-list {
  &__text {
    padding: 20px 0;
    font-size: 30px;
  }
  &__total {
    padding: 20px 0 40px;
    border-bottom: 1px solid #f0f0f0;
    margin: 0 0 40px;
  }
  &__total-cost {
    color: #5cbf96;
    font-weight: bold;
    font-size: 26px;
  }
}
</style>
