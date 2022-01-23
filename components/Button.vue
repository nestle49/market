<template lang="pug">
  button(v-if="text || icon" :class="icon ? 'material-icons-outlined justify-content-center' : ''").button.position-relative.d-inline-flex.align-items-center {{ text || icon }}
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Btn extends Vue {
  /*
   * TODO: Maybe change decorators to classic props
   */
  @Prop() readonly text!: string
  @Prop() readonly icon!: string
}
</script>
<style lang="scss" scoped>
.button {
  margin: 0 10px 0 0;
  padding: 8px 10px;
  border: none;
  outline: none;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease;
  background: #20ab4c; // TODO: variables for colors
  color: #fff; // TODO: variables for colors
  min-height: 40px;
  & i {
    width: 24px;
  }
  &:hover {
    background: #2dc55b;
  }
}
</style>


