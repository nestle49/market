import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import products from '~/store/products'

let productsStore: products

function initialiseStores(store: Store<any>): void {
  productsStore = getModule(products, store)
}

export { initialiseStores, productsStore }
