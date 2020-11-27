<template>
  <header id="header">
    <i class="iconfont icon-more back_page_icon"></i>
    <span class="header_text">购物车({{ totalNum }})</span>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CommonHeader extends Vue {
  @Prop(Number) private readonly totalNum!: number
}
</script>

<style scoped lang="scss">
#header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: rem(44);
  border-bottom: rem(1) solid $border_gray;
}

.back_page_icon {
  position: absolute;
  left: rem(10);
  font-size: $font_size_28 !important;
  font-weight: bold;
  transform: rotate(180deg);
}

.header_text {
  font-size: $font_size_18;
}
</style>
