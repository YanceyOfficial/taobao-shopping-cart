<template>
    <section id="item">
      <ul class="store_list">

        <!-- 有效的宝贝 -->
        <li class="store_item" ref="getStoreDOM" v-for="(store, storeIndex) in vaildCommodities" :key="store.store_id">
          <div :class="['store_wrapper', store.store_promotion.length === 0? 'store_wrapper_no_border' : '']">
            <span class="store_basic">
              <label for="selectStoreAll" class="radio_label">
                <input type="radio" id="selectStoreAll" class="select_radio">
                <i class="iconfont radio_icon icon-round"></i>
              </label>
              <i class="store_type_logo" :style="{backgroundImage: `url(${getStoreType(store.store_type)})`}"></i>
              <span class="store_name">{{ store.store_name }}</span>
              <i class="iconfont icon-more go_store_hp"></i>
            </span>
            <span class="store_attach">
              <span class="get_coupon" v-if="store.coupon">领券</span>
              <span class="get_edit" @click="toggleDelete(storeIndex)">编辑</span>
            </span>
          </div>
          <div class="store_activity_wrapper" v-if="store.store_promotion.length !== 0">
            <span class="activity_title">本店活动</span>
            <span class="activity_content">{{ store.store_promotion }}</span>
          </div>
          <ul class="commodity_list">
            <li class="commodity_item" v-for="(commodity, commodityIndex) in store.commodity_list" :key="commodity.sku_id">
              <div class="commodity_item_container">
                <div class="radio_img_wrapper">
                  <input type="checkbox" ref="oneSelect" @change="handleOneSelect($event)">
                  <!-- <label for="selectStoreOne" class="radio_label" @click="">
                    <input type="radio" id="selectStoreOne" class="select_radio" :checked="true">
                    <i class="iconfont radio_icon icon-round"></i>
                  </label> -->
                  <img :src="commodity.commodity_img" :alt="commodity.commodity_name" class="commodity_img">
                </div>
                <div class="commodity_detail_wrapper">
                  <h3 class="commodity_title">{{ commodity.commodity_name }}</h3>
                  <p class="warning tmall_wuyou_logo_wrapper" v-if="commodity.is_tmall_wuyou">
                    <img :src="tmall_wuyou_logo" alt="tmall_wuyou_logo">
                  </p>
                  <p class="sku_picker" v-if="commodity.type_union.length !== 0">{{ commodity.type_union.join(';') }}</p>
                    <div v-for="(warning, index) in commodity.warning_msg" :key="index">
                        <p class="warning low_stock_warning">{{ warning }}</p>
                    </div>
                  <div class="handle_count_wrapper">
                    <span class="price_wrapper">
                      <span class="small_text">¥</span>
                      <span class="large_text">{{ commodity.sku_unit_price.toString().split('.')[0] }}</span>
                      <span class="large_text" v-if="commodity.sku_unit_price.toString().split('.').length === 2">.</span>
                      <span class="small_text">{{ commodity.sku_unit_price.toString().split('.')[1] }}</span>
                    </span>
                    <span class="handle_count">
                      <!-- 减少数量需要传递三个参数，分别是 店铺索引/商品索引/当前数量 -->
                      <i class="iconfont icon-move handle_count_btn" @click="reduceCount(storeIndex, commodityIndex, commodity.cur_cart_num)"></i>
                      <span>{{ commodity.cur_cart_num }}</span>
                      <!-- 增加数量需要传递五个参数，分别是 店铺索引/商品索引/当前数量/购买上限/库存总量 -->
                      <i
                        class="iconfont icon-add handle_count_btn"
                        @click="addCount(storeIndex, commodityIndex, commodity.cur_cart_num, commodity.purchase_restriction_num, commodity.sku_rest_stock)"
                      >
                      </i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="delete_commodity">删除</div>
            </li>
          </ul>
        </li>

        <!-- 失效的宝贝 -->
        <li class="store_item">
          <div class="invaid_title_wrapper">
            <span class="invaid_big_logo">失效宝贝</span>
            <span class="remove_invaid_commodity">清空失效宝贝</span>
          </div>
          <ul class="commodity_list">
            <li class="commodity_item"  v-for="commodity in invaildCommodities" :key="commodity.commodity_id">
              <div class="commodity_item_container invaild_item_container">
                <span :class="['invaid_logo', commodity.pre_hot ? 'pre_hot' : '']">{{ commodity.pre_hot ? '预热' : '失效' }}</span>
                <img :src="commodity.commodity_img" :alt="commodity.commodity_name" class="commodity_img invalid_img">
                <div class="invaid_detail_wrapper">
                  <h3 class="commodity_title invaid_title">{{ commodity.commodity_name }}</h3>
                  <p class="invaid_reason">{{ commodity.fail_reason }}</p>
                  <p class="link_to_likely">找相似</p>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>

      <!-- modal -->
      <div class='dialog_wrapper' v-show="showDialog">
        <Overlay></Overlay>
        <PurchaseRestrictionDialog :warningMsg="warningMsg"></PurchaseRestrictionDialog>
      </div>
    </section>
  </template>

<script>
import Router from "vue-router";
import Overlay from "./overlay";
import PurchaseRestrictionDialog from "./purchaseRestrictionDialog";
import urlList from "../constant/url.js";
export default {
  name: "item",
  data() {
    return {
      tmall_wuyou_logo:
        "http://gw.alicdn.com/tfs/TB10WFoJH9YBuNjy0FgXXcxcXXa-405-72.png",
      showDialog: false,
      warningMsg: "",
      selectList: [],
    };
  },
  components: {
    Overlay,
    PurchaseRestrictionDialog
  },
  props: {
    vaildCommodities: Array,
    invaildCommodities: Array
  },
  mounted() {},
  methods: {
    toggleDelete(storeIndex) {
      const curStoreDOM = this.$refs.getStoreDOM[storeIndex];
      const deleteDOM = curStoreDOM.querySelectorAll(".delete_commodity");
      const commodityDOM = curStoreDOM.querySelectorAll(
        ".commodity_item_container"
      );
      const editorTagDOM = curStoreDOM.querySelector(".get_edit");
      for (let i = 0, l = deleteDOM.length; i < l; i += 1) {
        deleteDOM[i].classList.toggle("show_delete");
        commodityDOM[i].classList.toggle("shrink_commodity_item");
      }
      if (editorTagDOM.innerText === "编辑") {
        editorTagDOM.innerText = "完成";
      } else {
        editorTagDOM.innerText = "编辑";
      }
    },
    getStoreType(typeNum) {
      if (typeNum === 1) {
        return urlList.tmall;
      } else if (typeNum === 2) {
        return urlList.enterprise;
      } else if (typeNum === 3) {
        return urlList.tmall_internation;
      }
    },
    closeDialog() {
      setTimeout(() => {
        this.showDialog = false;
      }, 1000);
    },
    addCount(storeIndex, commodityIndex, curNum, limitMaxNum, maxStockNum) {
      // 如果有限购条件
      if (limitMaxNum > 0) {
        // 如果增加一件的话将超过最大限购数
        if (curNum + 1 > limitMaxNum) {
          this.showDialog = true;
          this.warningMsg = "亲，该宝贝不能购买更多哦～";
          this.closeDialog();
        } else {
          this.vaildCommodities[storeIndex].commodity_list[
            commodityIndex
          ].cur_cart_num += 1;
        }
      } else {
        if (curNum + 1 > maxStockNum) {
          this.showDialog = true;
          this.warningMsg = "亲，该宝贝不能购买更多哦～";
          this.closeDialog();
        } else {
          this.vaildCommodities[storeIndex].commodity_list[
            commodityIndex
          ].cur_cart_num += 1;
        }
      }
    },
    reduceCount(storeIndex, commodityIndex, curNum) {
      if (curNum - 1 === 0) {
        this.showDialog = true;
        this.warningMsg = "受不了了，宝贝不能再减少了哦～";
        this.closeDialog();
      } else {
        this.vaildCommodities[storeIndex].commodity_list[
          commodityIndex
        ].cur_cart_num -= 1;
      }
    },
    handleOneSelect(e) {
      console.log()
      if (e.target.checked) {

      }
    }
  }
};
</script>

<style lang="scss">
#item {
  width: 100%;
}

.store_list {
  margin-bottom: rem(100);
  padding-top: rem(12);
  background: $background_gray;
  .store_item {
    margin-top: rem(12);
    background: $white;
    &:first-child {
      margin-top: 0;
    }
  }
}

.store_wrapper_no_border {
  box-shadow: none !important;
}

.store_wrapper {
  display: flex;
  align-items: center;
  padding: rem(2) rem(12);
  box-shadow: inset 0px -1px 1px -1px $border_gray;
  .store_basic {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    .store_type_logo {
      display: inline-block;
      width: $font_size_16;
      height: $font_size_16;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .store_name {
      width: rem(100);
      height: rem(18);
      overflow: hidden;
    }
    .go_store_hp {
      position: relative;
      top: 0;
      font-size: $font_size_18;
      font-weight: bold;
    }
  }

  .store_attach {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: rem(20);
    .get_coupon {
      margin-right: rem(10);
      padding-right: rem(10);
      display: inline-block;
      border-right: 1px solid $border_gray;
    }
  }
}

.store_activity_wrapper {
  margin: rem(12) rem(50);
  .activity_title {
    margin-right: rem(8);
    padding: rem(1) rem(2);
    font-size: $font_size_12;
    color: $orange;
    border: 1px solid $orange;
    border-radius: 4px;
  }
}

.commodity_item {
  position: relative;
  overflow: hidden;
}

.commodity_item_container {
  display: flex;
  justify-content: space-around;
  margin-top: rem(8);
  padding: rem(4) rem(10);
  transition: transform 0.2s ease-in 0s;
  transform: translateX(0);
  will-change: transform;
  .radio_img_wrapper {
    display: flex;
    height: rem(98);
  }
  .commodity_img {
    width: rem(98);
    height: rem(98);
    min-width: rem(98);
    min-height: rem(98);
    object-fit: cover;
    margin-left: rem(10);
  }
  .commodity_detail_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: rem(98);
    padding: 0 0 rem(6) rem(12);
    .sku_picker {
      position: relative;
      margin: rem(8) 0;
      padding: rem(2) rem(24) rem(2) rem(2);
      background: $_background_gray;
      color: $invaid_gray;
      border-radius: rem(4);
      &::after {
        position: absolute;
        top: 0;
        right: rem(8);
        bottom: 0;
        margin: auto;
        content: "";
        width: rem(12);
        height: rem(12);
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAYAAABozQZiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjQzMkFFNTQ0MEYxMUU1OTZDRjk2ODYxMEYzRTU0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MjQzMkFFNjQ0MEYxMUU1OTZDRjk2ODYxMEYzRTU0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNDMyQUUzNDQwRjExRTU5NkNGOTY4NjEwRjNFNTQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyNDMyQUU0NDQwRjExRTU5NkNGOTY4NjEwRjNFNTQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YpVSkgAAATZJREFUeNpinDlzJhsDA0MBEP8E4mlpaWm/GYgETECcC8SdQDwBiNfOmjWLjRTNv5D4vkC8hlgDQJqnAfEycgxgAvrxL5COI8cAkM0M5BrABGOQYwDj////UQSACpmB1CIgjkIS3gcyCGjBN6w2Y3HBXCRhJyDeAjSYC69mJANSgXgGkrAjugFMuAIDaADIP1n4DMDwMzoAKmSEpoUMJOHbQGzERCghILlgDpKwKhDPZiIyGbMCsSya2HuCmqFxvAaI3ZGEdwBxDhORGn2RhEEB6AX0zj+cAYZD42IgjoeGA/aowqERlGwTYRqxasajMQ6aeLCnMFI0omiGZojFxGqEa0bKSWHEagQBZikpKWxZkKBGmM1xaBo3EaMRphk50DYDcSgxGkGABYgXgJwPxXNIKfQBAgwAqZCKsABxZ/8AAAAASUVORK5CYII=)
          center center no-repeat;
        background-size: contain;
        transform: rotate(90deg);
      }
    }
    .warning {
      margin-top: rem(2);
      color: $orange;
    }
    .tmall_wuyou_logo_wrapper {
      margin-top: rem(8);
      img {
        display: block;
        height: rem(12);
      }
    }
  }
  .handle_count_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: rem(8);
    .handle_count {
      width: rem(60);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: rem(12);
      font-size: rem(14);
      .handle_count_btn {
        color: $gray;
        font-size: rem(14) !important;
      }
    }
  }
}

.commodity_title {
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.invaid_container {
  align-items: center;
}

.invaid_title_wrapper {
  display: flex;
  justify-content: space-between;
  padding: rem(16) rem(10) 0 rem(48);
  font-size: $font_size_14;
  .remove_invaid_commodity {
    color: $orange;
    border: 1px solid $orange;
    border-radius: rem(4);
    padding: rem(6);
  }
}

.invaild_item_container {
  align-items: center;
}

.invaid_logo {
  box-sizing: border-box;
  display: inline-block;
  width: rem(84);
  background: $invaid_logo_gray;
  color: $white;
  border-radius: rem(4);
  text-align: center;
  padding: 0 rem(1);
  line-height: 1.4;
}
.pre_hot {
  background: $pre_hot;
}
.invalid_img {
  margin-left: rem(8) !important;
}
.invaid_detail_wrapper {
  width: rem(602);
  padding: rem(6) 0 rem(6) rem(12);
}
.invaid_title {
  color: $invaid_gray;
}
.invaid_reason {
  margin: rem(8) 0;
}

.link_to_likely {
  display: inline-block;
  padding: rem(4) rem(8);
  font-size: $font_size_14;
  color: $orange;
  border: 1px solid $orange;
  border-radius: rem(4);
}

.delete_commodity {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  width: rem(60);
  height: 96%;
  background: $orange;
  font-size: $font_size_14;
  color: $white;
  text-align: center;
  line-height: rem(98);
  transition: transform 0.2s ease-in 0s;
  transform: translateX(rem(60));
  will-change: transform;
}

.shrink_commodity_item {
  transition: transform 0.2s ease-in 0s;
  transform: translateX(rem(-60));
  will-change: transform;
}

.show_delete {
  transition: transform 0.2s ease-in 0s;
  transform: translateX(0);
  will-change: transform;
}
</style>
