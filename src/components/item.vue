<template>
    <section id="item">
      <ul class="store_list">
        <li class="store_item">
          <div class="store_wrapper">
          <span class="store_basic">
            <label for="selectStoreAll" class="radio_label">
              <input type="radio" id="selectStoreAll" class="select_radio">
              <i class="iconfont radio_icon icon-round"></i>
            </label>
            <i class="tianmao_logo"></i>
            <span class="store_name">{{ storeName }}</span>
            <i class="iconfont icon-more go_store_hp"></i>
          </span>
          <span class="store_attach">
            <span class="get_coupon">领券</span>
            <span class="get_edit" :data-store-id="flag" @click="showDelete($event)">{{ flag ? '完成' : '编辑' }}</span>
          </span>
        </div>
          <div class="store_activity_wrapper">
            <span class="activity_title">本店活动</span>
            <span class="activity_content">满100元，享包邮</span>
          </div>
          <ul class="commodity_list">
            <li class="commodity_item">
              <div :class="['commodity_item_container', flag ? 'shrink_commodity_item' : '']" data-store-id="5be82ee2dc989f28b3c027eb">
                <div class="radio_img_wrapper">
                  <label for="selectStoreOne" class="radio_label">
                    <input type="radio" id="selectStoreOne" class="select_radio">
                    <i class="iconfont radio_icon icon-round"></i>
                  </label>
                  <img :src="jiangzemin" alt="" class="commodity_img">
                </div>
                <div class="commodity_detail_wrapper">
                  <h3 class="commodity_title">现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社</h3>
                  <span class="low_stock_warning">库存紧张</span>
                  <span class="low_stock_warning">库存紧张</span>
                  <span class="low_stock_warning">库存紧张</span>
                  <span class="low_stock_warning">库存紧张</span>
                  <div class="handle_count_wrapper">
                    <span class="price_wrapper">
                      <span class="small_text">¥</span>
                      <span class="large_text">{{ unitPrice }}.</span>
                      <span class="small_text">{{ unitPrice }}</span>
                    </span>
                    <span class="handle_count">
                      <i class="iconfont icon-move handle_count_btn"></i>
                      <span>{{ count }}</span>
                      <i class="iconfont icon-add handle_count_btn"></i>
                    </span>
                  </div>
                </div>
              </div>
                <div :class="['delete_commodity', flag ? 'show_delete' : '']" data-store-id="5be82ee2dc989f28b3c027eb">删除</div>
            </li>
            <li class="commodity_item">
              <div :class="['commodity_item_container', flag ? 'shrink_commodity_item' : '']">
                <label for="selectStoreOne" class="radio_label">
                  <input type="radio" id="selectStoreOne" class="select_radio">
                  <i class="iconfont radio_icon icon-round"></i>
                </label>
                <img :src="jiangzemin" alt="" class="commodity_img">
                <div class="commodity_detail_wrapper">
                  <h3 class="commodity_title">现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社</h3>
                  <div class="handle_count_wrapper">
                    <span class="price_wrapper">
                      <span class="small_text">¥</span>
                      <span class="large_text">{{ unitPrice }}.</span>
                      <span class="small_text">{{ unitPrice }}</span>
                    </span>
                    <span class="handle_count">
                      <i class="iconfont icon-move handle_count_btn"></i>
                      <span>{{ count }}</span>
                      <i class="iconfont icon-add handle_count_btn"></i>
                    </span>
                  </div>
                </div>
              </div>
                <div :class="['delete_commodity', flag ? 'show_delete' : '']">删除</div>
            </li>
          </ul>
        </li>


        <!-- the second store -->
        <li class="store_item">
          <div class="store_wrapper">
          <span class="store_basic">
            <label for="selectStoreAll" class="radio_label">
              <input type="radio" id="selectStoreAll" class="select_radio">
              <i class="iconfont radio_icon icon-round"></i>
            </label>
            <i class="tianmao_logo"></i>
            <span class="store_name">{{ storeName }}</span>
            <i class="iconfont icon-more go_store_hp"></i>
          </span>
          <span class="store_attach">
            <span class="get_coupon">领券</span>
            <span class="get_edit" @click="showDelete()">{{ flag ? '完成' : '编辑' }}</span>
          </span>
        </div>
          <div class="store_activity_wrapper">
            <span class="activity_title">本店活动</span>
            <span class="activity_content">满100元，享包邮</span>
          </div>
          <ul class="commodity_list">
            <li class="commodity_item">
              <div :class="['commodity_item_container', flag ? 'shrink_commodity_item' : '']">
                <label for="selectStoreOne" class="radio_label">
                  <input type="radio" id="selectStoreOne" class="select_radio">
                  <i class="iconfont radio_icon icon-round"></i>
                </label>
                <img :src="jiangzemin" alt="" class="commodity_img">
                <div class="commodity_detail_wrapper">
                  <h3 class="commodity_title">现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社</h3>
                  <div class="handle_count_wrapper">
                    <span class="price_wrapper">
                      <span class="small_text">¥</span>
                      <span class="large_text">{{ unitPrice }}.</span>
                      <span class="small_text">{{ unitPrice }}</span>
                    </span>
                    <span class="handle_count">
                      <i class="iconfont icon-move handle_count_btn"></i>
                      <span>{{ count }}</span>
                      <i class="iconfont icon-add handle_count_btn"></i>
                    </span>
                  </div>
                </div>
              </div>
                <div :class="['delete_commodity', flag ? 'show_delete' : '']">删除</div>
            </li>
            <li class="commodity_item">
              <div :class="['commodity_item_container', flag ? 'shrink_commodity_item' : '']">
                <label for="selectStoreOne" class="radio_label">
                  <input type="radio" id="selectStoreOne" class="select_radio">
                  <i class="iconfont radio_icon icon-round"></i>
                </label>
                <img :src="jiangzemin" alt="" class="commodity_img">
                <div class="commodity_detail_wrapper">
                  <h3 class="commodity_title">现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社</h3>
                  <div class="handle_count_wrapper">
                    <span class="price_wrapper">
                      <span class="small_text">¥</span>
                      <span class="large_text">{{ unitPrice }}.</span>
                      <span class="small_text">{{ unitPrice }}</span>
                    </span>
                    <span class="handle_count">
                      <i class="iconfont icon-move handle_count_btn"></i>
                      <span>{{ count }}</span>
                      <i class="iconfont icon-add handle_count_btn"></i>
                    </span>
                  </div>
                </div>
              </div>
                <div :class="['delete_commodity', flag ? 'show_delete' : '']">删除</div>
            </li>
            <li class="commodity_item">
              <div :class="['commodity_item_container', flag ? 'shrink_commodity_item' : '']">
                <label for="selectStoreOne" class="radio_label">
                  <input type="radio" id="selectStoreOne" class="select_radio">
                  <i class="iconfont radio_icon icon-round"></i>
                </label>
                <img :src="jiangzemin" alt="" class="commodity_img">
                <div class="commodity_detail_wrapper">
                  <h3 class="commodity_title">现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社</h3>
                  <div class="handle_count_wrapper">
                    <span class="price_wrapper">
                      <span class="small_text">¥</span>
                      <span class="large_text">{{ unitPrice }}.</span>
                      <span class="small_text">{{ unitPrice }}</span>
                    </span>
                    <span class="handle_count">
                      <i class="iconfont icon-move handle_count_btn"></i>
                      <span>{{ count }}</span>
                      <i class="iconfont icon-add handle_count_btn"></i>
                    </span>
                  </div>
                </div>
              </div>
                <div :class="['delete_commodity', flag ? 'show_delete' : '']">删除</div>
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
            <li class="commodity_item">
              <div :class="['commodity_item_container', 'invaid_container', flag ? 'shrink_commodity_item' : '']">
                <span class="invaid_logo">失效</span>
                <img :src="jiangzemin" alt="" class="commodity_img invalid_img">
                <div class="invaid_detail_wrapper">
                  <h3 class="commodity_title invaid_title">现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社</h3>
                  <p class="invaid_reason">商品库存不足</p>
                  <p class="link_to_likely">找相似</p>
                </div>
              </div>
                <div :class="['delete_commodity', flag ? 'show_delete' : '']">删除</div>
            </li>
            <li class="commodity_item">
              <div :class="['commodity_item_container', 'invaid_container', flag ? 'shrink_commodity_item' : '']">
                <span class="invaid_logo">失效</span>
                <img :src="jiangzemin" alt="" class="commodity_img invalid_img">
                <div class="invaid_detail_wrapper">
                  <h3 class="commodity_title invaid_title">现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社</h3>
                  <p class="invaid_reason">宝贝已不能购买，请联系卖家</p>
                  <p class="link_to_likely">找相似</p>
                </div>
              </div>
                <div :class="['delete_commodity', flag ? 'show_delete' : '']">删除</div>
            </li>
          </ul>
        </li>

      </ul>
    </section>
  </template>

<script>
import Router from "vue-router";
export default {
  name: "item",
  data() {
    return {
      curStoreId: "",
      flag: false,
      count: 2,
      storeName: "良品铺子旗舰店",
      unitPrice: 0,
      // jiangzemin: "https://yancey-assets.oss-cn-beijing.aliyuncs.com/O1CN01GNwiZV1VdBx79CBZl_%21%210-item_pic.jpg_200x200q50s150.jpg"
      jiangzemin:
        "https://gw.alicdn.com/bao/uploaded/i2/619123122/O1CN011YvuzFv3R9ezInI_!!0-item_pic.jpg_200x200q50s150.jpg"
    };
  },
  mounted() {},
  methods: {
    showDelete() {
      this.flag = !this.flag;
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
    .tianmao_logo {
      display: inline-block;
      width: $font_size_16;
      height: $font_size_16;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRjQ4QTZBMjczMkYxMUU1OTIxNEVBNEM3N0VGQTM4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRjQ4QTZBMzczMkYxMUU1OTIxNEVBNEM3N0VGQTM4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGNDhBNkEwNzMyRjExRTU5MjE0RUE0Qzc3RUZBMzhCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGNDhBNkExNzMyRjExRTU5MjE0RUE0Qzc3RUZBMzhCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cikVKAAAAwBQTFRF0Ds6aWFgzjMyzjAvIRcTIhgVxxIQFQkG1EpJAgAAGREOaGJgxxcVxhAOxQoJxAYFxAwLxAgHxAkIQjs4JRsYJBoXIxkW////JBkWKx4aKR4bKBwZDgQBwgIAEgcFFQ0LwwIA1lNS9tjYVE5M3XJx//7+/vz8/vn5JxwY/PLyzCwrzS8u7ra2xRAO9dfX/ff333l47ri43G9uxQ4MLSQh1U9O+ODg/fj43nV08MDA+urq2WBfWlJQ887OIRgV6aSkyMbFyRsa4YGBEQ4O5uXl6J+f5I6O/PPzzzg3++7u2FxbJhsY9tnZ/vv77rm55eXkzS4tLyEdKh0a+OLi1lBP00NB9NDQs7Ky8sjIWVFPLCMgyyUk+efno56c3XBv4H5911lYVVBO/PHxVlBP3G1s/fb277u7/PT0KR0aKh0Z6J6e9tra2tnY883N/vr6W1JPDQ0N11hXxQ8NwwgG1U1MaWJgLSUi1lVUaGFf1E1M6Ojo22tqHRMQ0dHR+unp4oeH99zcFxAO2FlXt7a2ZmJgr66u0UFA9dTUyBsZ2WFgMCYjwwMCamZlbmhmKCEf0T8+KSIf7bOz2mdm8L+/sK+vuLe3SkE/ISEhwgMB9NHRtrKx1E5N1k9Oo5+eRDk20Dw7ST88+ejo0UA/88vLyiEgyyQi44uL3Nraop6d1EtKnpyboJ6du7q6+uzs33x78cPD55mZj42M00dGGw4L3nFw3nNy+OHhyR4d/f39+eDgRT07662t33t6rays3nh3rq2t44iIm5ubxg4N/fX1+fn5vry86qmp4YKC7K+v66urm5mY00lI1lJR+OPjHx8f9tvb6J2dKB4cIxoWsrGx4IB/88zMVk5MyRkY6aWl2F9e5I2N6aGhyycm993d2mNh6KCgRz484YCANCon8cXF8sbF4H9+lpaWFgsIFw8O77y877297K6u6aKi6aOjzS0r29jY11pZ22hn33V0xAcG2V5dHhIP22ppvby8zi4sxxEQb2ln8snJLiUibGZkKyEe0j89Rm1SHAAAAupJREFUeNqslGVUG0EQxw9IoEepYQOFhU2aEJLgLi3aFgluFSha3KXu7u7u7u7uXuruLXWjRv2WC0fa8vr6ofPe3s7u/HZnbu7/joJ/MOp/Qysm1Rk9tPxgLTQy0nhdHcxx48iBHNTdwNAgatAfzJ4oI6POHPRRYeilaNrrN2aliYEXfzgHTVTw9bW0Kh5tVWX2VZhW6PPbc9B5hYkpb3vh3NNpKc1YS0mbMrvwUk9TSycOamNp3m/J0jtQn862zOJt4GVZZtNqMHn6q8fmX2shI7oDfKMBxprxeeXnynl8s9EAdFdYStem2/VeKxza0XnQifaiR8Fnmk/Xhzy6HYSbaXPQgO/aPqBW1BKa+zsZ6s3SM3Tybw4ti9TAR/seC+UKrBHCCGOEyMwZZoe1IBcooSbjE+MAzlXOmkJKwC2xciDVHbIWUNaMZw8WFhYu0cwDhL64Y8KRxgj3X8NA186SA44UOSBwEG0SzYsWiUQbb+1HGq3gcJPXF2HvhYcu0reEorjbn47j7u8hjt0BYJueCbCZxCiuBncrjNk3qvQDz1I3Gx1d3Sv2VSzEBCi5XP4yrq1MQ64R6Isizkikw9AWEvm0CLPpmOMgFoNraKiEzItxovecIW533d0XTPjy4NkyUgFJh2c4O9dLlki7lc10jpHhxqjqpl1IX7vbEJbkcYrEqZpi1QFkbPOwLB8+CFfjhpnz0Xqorgkre2wVFPCE7XcxtHVxaPHiRpmtW7xDAVcTA16FZckgIt7ULu8u5ydaQe8DYtcEWKWECHYCWmH0HDyZnREIxabGTLv+o9g2acxOCYlWt8BxN2RUIqRrD62HMgkbZgTpbOuDUIA6joeaZmIhrC0l1zZqDekncUQLCEbHCjraQc74HKhO14CBwgZjVi8o0NsPvYkLRmjhUYk0xCPV9T4TcCRSUZEb6+IaxVSrh5GKjaYKoPx4iNWgEta0oUAoKMG/yBYrNcdKukQg/P//p7/bTwEGAEE+/6NVwj6xAAAAAElFTkSuQmCC)
        no-repeat;
      background-size: contain;
    }
    .go_store_hp {
      position: relative;
      top: rem(1);
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
  padding: rem(4) rem(10);
  transition: transform 0.2s ease-in 0s;
  transform: translateX(0);
  will-change: transform;
  .radio_img_wrapper{
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
    .low_stock_warning {
      color: $orange;
    }
  }
  .handle_count_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

.invaid_container{
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

.invaid_logo {
  box-sizing: border-box;
  display: inline-block;
  width: rem(88);
  background: #aaaaaa;
  color: #ffffff;
  border-radius: rem(4);
  text-align: center;
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
