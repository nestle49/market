<template lang="pug">
  transition(name="toggle")
    section.modal(v-if="isVisibleModal")
      button.close-popup.material-icons-outlined(@click="closePopup") close
      .modal__text.d-flex.justify-content-center.align-items-center {{ modalText }}
</template>

<script lang="ts">
import {Vue, Component, Emit, Prop} from 'nuxt-property-decorator'
@Component
export default class Modal extends Vue {
  @Prop({ default: false }) readonly isVisibleModal!: boolean
  @Prop({ default: '' }) readonly modalText!: string
  @Emit('close')
  closePopup(){

  }
  head() {
    return {
      bodyAttrs: {
        class: this.isVisibleModal ? 'modal--active' : '',
      },
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  background: #fff;
  top: 0;
  left: 0;
  &__text {
    color: #5cbf96;
    height: 100%;
    font-size: 40px;
  }
}
.close-popup {
  position: absolute;
  right: 40px;
  top: 40px;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    transform: rotateZ(360deg);
  }
}
.toggle-enter-active,
.toggle-leave-active {
  transition: all 0.5s ease;
}
.toggle-enter,
.toggle-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
