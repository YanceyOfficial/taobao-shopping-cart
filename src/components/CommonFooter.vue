<template>
  <footer id="footer" class="border_1px_top">
    <ul class="nav_list">
      <li class="nav_item" v-for="item in tabItems" :key="item.name">
        <span class="nav_item_tab">
          <i class="iconfont footer_icon" :class="item.icon"></i>
          <p class="tab_name">{{ item.name }}</p>
        </span>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CommonFooter extends Vue {
  private tabItems = [
    {
      name: '首页',
      icon: 'icon-home',
    },
    {
      name: '购物车',
      icon: 'icon-cartfill',
    },
    {
      name: '我的',
      icon: 'icon-my',
    },
    {
      name: '心水',
      icon: 'icon-like',
    },
    {
      name: '更多',
      icon: 'icon-more_light',
    },
  ]
}
</script>

<style lang="scss" slot-scope>
#footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: calc(#{rem(42)} + env(safe-area-inset-bottom));
  background: $white;
}

.nav_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 rem(20);
  width: 100%;
  .nav_item_tab {
    display: block;
    text-align: center;
    color: $gray;
  }
  .footer_icon {
    font-size: $font_size_18;
  }
  .tab_name {
    font-size: $font_size_12;
    font-weight: 400;
    line-height: 1;
    transform: scale(0.83333333);
  }
}
</style>
