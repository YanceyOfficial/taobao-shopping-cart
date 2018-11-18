<template>
  <section id="purchaseRestrictionDialog">
      <p class="purchase_restriction"> {{ warningMsg }} </p>
      <div class="delete_confirm" v-if="false">
          <p class="delete_confirm_title">确定要删除这个宝贝吗？</p>
          <div class="delete_confirm_btn">
            <span class="btn cancel">取消</span>
            <span class="btn ok">确定</span>
          </div>
      </div>
  </section>
</template>

<script>
import Router from "vue-router";
export default {
  name: "purchaseRestrictionDialog",
  data() {
    return {
    };
  },
  props: {
    warningMsg: String,
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#purchaseRestrictionDialog {
  font-size: $font_size_14;
  text-align: center;
  z-index: 9999;
  .purchase_restriction {
    position: fixed;
    width: rem(240);
    height: rem(18);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: rgba($dialog_background, 0.9);
    color: $white;
    padding: rem(16);
    border-radius: rem(4);
  }
  .delete_confirm {
    width: rem(270);
    height: rem(90);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: $delete_dialog_background;
    color: $white;
    .delete_confirm_title {
      font-size: $font_size_16;
      color: $delete_title;
      padding: rem(12) 0;
      border-bottom: 1px solid $delete_confirm_line;
    }
    .delete_confirm_btn {
      display: flex;
      justify-content: space-around;
      color: $delete_btn;
      font-size: $font_size_18;
      font-weight: bold;
      .btn {
        width: 50%;
        line-height: rem(44);
      }
      .cancel {
        border-right: 1px solid $delete_confirm_line;
      }
    }
  }
}
</style>
