<template>
  <section id="purchaseRestrictionDialog">
    <p class="purchase_restriction" v-if="!isDialog">{{ warningMsg }}</p>
    <div class="delete_confirm" v-if="isDialog">
      <p class="delete_confirm_title">{{ warningMsg }}</p>
      <div class="delete_confirm_btn">
        <span class="btn cancel" @click="handleCancel()">取消</span>
        <span class="btn ok" @click="handleOk()">确定</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'purchaseRestrictionDialog',
  props: {
    warningMsg: String,
    isDialog: Number,
  },
  methods: {
    handleOk() {
      this.$emit('getDialogFeedback', this.isDialog, true)
    },
    handleCancel() {
      this.$emit('getDialogFeedback', this.isDialog, false)
    },
  },
}
</script>

<style lang="scss">
#purchaseRestrictionDialog {
  font-size: $font_size_14;
  text-align: center;
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
    position: fixed;
    width: rem(270);
    height: rem(90);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: $delete_dialog_background;
    color: $white;
    z-index: 9999;
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
