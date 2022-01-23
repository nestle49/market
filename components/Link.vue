<template lang="pug">
  NuxtLink(v-if="text" :to="to").link.link--main.position-relative.d-inline-flex.align-items-center {{ text }}
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Link extends Vue {
  /*
   * TODO: Maybe change decorators to classic props
   * TODO: Default route is homepage
   * TODO: Hide link if text is empty
   */
  @Prop({ default: '/' }) readonly to!: string
  @Prop() readonly text!: string
}
</script>
<style lang="scss" scoped>
  .link {
    margin: 0 10px 0 0;
    padding: 8px 10px;
    border: none;
    outline: none;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease;
    min-height: 40px;
    &--main {
      background: #20ab4c; // TODO: variables for colors
      color: #fff; // TODO: variables for colors
      &:hover {
        background: #2dc55b;
      }
    }
  }
</style>


