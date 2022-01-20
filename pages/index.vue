<template>
  <ul>
    <li>
      <NuxtLink to="catalog">Catalog</NuxtLink>
    </li>
    <li>
      <NuxtLink to="cart">Cart</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class HomePage extends Vue {}
</script>


