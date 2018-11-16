<template>
    <footer id="footer">
        <ul class="nav_list">
          <li class="nav_item">
            <span class="nav_item_tab">
              <i class="iconfont icon-home footer_icon"></i>
              <p class="tab_name">首页</p>
            </span>
          </li>
           <li class="nav_item">
            <span class="nav_item_tab">
              <i class="iconfont icon-cartfill footer_icon"></i>
              <p class="tab_name">购物车</p>
            </span>
          </li>
           <li class="nav_item">
            <span class="nav_item_tab">
              <i class="iconfont icon-my footer_icon"></i>
              <p class="tab_name">我的淘宝</p>
            </span>
          </li>
           <li class="nav_item">
             <span class="nav_item_tab">
              <i class="iconfont icon-like footer_icon"></i>
              <p class="tab_name">心水</p>
            </span>
          </li>
          <li class="nav_item">
             <span class="nav_item_tab">
              <i class="iconfont icon-more_light footer_icon"></i>
              <p class="tab_name">更多</p>
            </span>
          </li>
        </ul>
    </footer>
  </template>

<script>
import Router from "vue-router";
export default {
  name: "commonFooter",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#footer {
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: rem(54);
  padding-top: rem(4);
  border-top: 1px solid $border_gray;
  background: $white;
}

.nav_list {
  display: flex;
  justify-content: space-between;
  padding: 0 rem(20);
  .nav_item_tab {
    display: block;
    text-align: center;
    color: $gray;
  }
  .footer_icon {
    font-size: $font_size_18;
  }
  .tab_name{
    font-size: $font_size_12;
    font-weight: 400;
    line-height: 1;
  }
}
</style>
