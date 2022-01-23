<template lang="pug">
    section.catalog
      .container
        h1 Catalog
        .catalog-list.d-flex.flex-wrap
          card(v-for='product in products', :key='product.id' :product="product")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { productsStore } from '~/store'
import Card from '@/components/pages/catalog/Card.vue'
@Component({
  components: {
    Card
  },
})
export default class Catalog extends Vue {

  async fetch () {
    await productsStore.fetchProducts()
  }

  get products (): any { /* mapGetters exist for class api?  */
    return productsStore.products
  }
}
</script>

