<template lang="pug">
  .app.d-flex.flex-column
    app-header
    main.app-content.d-flex.flex-column
      Nuxt
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import AppHeader from '@/components/layout/header/index.vue'
  @Component({
    components: {
      AppHeader,
    }
  })
  export default class Layout extends Vue {}
</script>


