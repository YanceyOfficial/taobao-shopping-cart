<template>
    <header id="header">
        <i class="iconfont icon-more back_page_icon"></i>
        <span class="header_text">购物车({{ totalNum }})</span>
    </header>
  </template>
<script>

export default {
  name: 'commonFooter',
  data() {
    return {};
  },
  props: {
    totalNum: Number,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
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
