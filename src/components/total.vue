<template>
  <section id="total">
    <span class="total_left">
      <label for="selectAll" class="radio_label">
        <input type="radio" id="selectAll" class="select_radio">
        <i class="iconfont radio_icon icon-round"></i>
        全选
      </label>
    </span>
    <span class="total_right">
      <span>
        合计：
        <span class="price_wrapper">
          <span class="small_text">¥</span>
          <span class="large_text">{{ totalPrice }}.</span>
          <span class="small_text">{{ totalPrice }}</span>
        </span>
        <span class="settle_warapper">
          <button class="settle_btn">结算({{ totalAmount }})</button>
        </span>
      </span>
    </span>
  </section>
</template>

<script>
import Router from "vue-router";
export default {
  name: "total",
  data() {
    return {
      totalPrice: 0,
      totalAmount: 0
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#total {
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: rem(52);
  width: 100%;
  height: rem(48);
  border-top: rem(1) solid $border_gray;
  background: $white;
}

.total_left {
  position: relative;
  margin-left: rem(16);
  font-size: $font_size_16;
}

.radio_label {
  display: flex;
  align-items: center;
}

.total_right {
  font-size: $font_size_16;
}

.settle_btn {
  width: rem(100);
  height: rem(48);
  margin-left: rem(12);
  background: $orange;
  color: $white;
  font-size: $font_size_14;
}
</style>
