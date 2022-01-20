<template lang="pug">
  .pug-example
    p Cart
    a(href="https://badcode.ru", target="_blank") More interesting stuff on badcode.ru
    div {{ message }}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Cart extends Vue {
  message: string = 'This is a Cart'
}
</script>

