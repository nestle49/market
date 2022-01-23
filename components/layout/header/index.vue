<template lang="pug">
  .header.d-flex
    //- TODO: cycle for if more elements
    .container
      nav.main-nav.d-flex
        li
          Link(text="Main")
        li
          Link(to="/catalog/" text="Catalog")
        li
          Link(to="/cart/" text="Cart")
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Link from '@/components/Link.vue'
@Component({
  components: {
    Link
  }
})
export default class AppHeader extends Vue {}
</script>
<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: all .5s;
  padding: 20px 0;
}
</style>

