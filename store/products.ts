import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: object,
}

@Module({
  name: 'products',
  stateFactory: true,
  namespaced: true,
})
export default class ProductsModule extends VuexModule {
  products: Product[] = []

  @Mutation
  setProducts(products: Product[]) {
    this.products = products
  }

  @Action({ commit: 'setProducts' })
  async fetchProducts() {
    return await $axios.$get('https://fakestoreapi.com/products')
  }
}
