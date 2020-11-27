<template>
  <section id="overlay"></section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Overlay extends Vue {
  private openOverlay = false
}
</script>

<style lang="scss" slot-scope>
#overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($black, 0.1);
  z-index: 9998;
}
</style>
