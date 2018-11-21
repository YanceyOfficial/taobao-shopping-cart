<template>
  <section id="skuSelector">
    <div class="overlay" v-show="showSkuPicker" @click="closeSkuPicker()"></div>
    <div :class="['sku_selector_wrapper', showSkuPicker ? 'show_popup' : '']">
      <div class="sku_close" @click="closeSkuPicker()"></div>
      <div class="sku_selector_container">
        <div class="sku_intro">
          <figure>
            <img :src="skuMock.sku_img" :alt="skuMock.sku_id">
          </figure>
          <div class="sku_intro_detail">
            <p class="price">¥ {{ skuMock.sku_price }}</p>
            <p class="sku_txt stock">库存：{{ skuMock.sku_stock }}</p>
            <p class="sku_txt cur_select">已选：{{ curSelect.join(' ') }}</p>
          </div>
        </div>
        <div class="sku_list_wrapper">
          <div class="sku_list_container" v-for="(item, key) in skuMock.sku_attr" :key="key">
            <h2 class="sku_attr_name">{{ item.key }}</h2>
            <ul class="sku_list">
              <li class="sku_item" v-for="(_item, _key) in item.value" :key="_key">{{ _item }}</li>
            </ul>
          </div>
        </div>
        <div class="ok_btn_wrapper">
          <button class="ok_btn">此功能不在购物车范围内 <del>就是懒</del></button>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
export default {
  name: 'skuSelector',
  data() {
    return {
      skuMock: {
        sku_id: '782731205',
        sku_img:
            '//img.alicdn.com/imgextra/i1/1621790841/O1CN019ENLri1I5DZGyxEDU_!!0-item_pic.jpg_120x120q50s150.jpg',
        sku_price: 7688,
        sku_stock: 8,
        sku_attr: [
          {
            key: '颜色',
            value: ['银灰色'],
          },
          {
            key: '套餐类型',
            value: [
              '黑白键盘套装',
              '灰钴蓝键盘套装',
              '深酒红键盘套装',
              '亮铂金键盘套装',
              '官方标配',
            ],
          },
          {
            key: '网络类型',
            value: ['WIFI'],
          },
          {
            key: '存储容量',
            value: ['256GB'],
          },
        ],
        skus: [],
      },
      curSelect: [
        '银灰色',
        '深酒红键盘套装',
        'WIFI',
        '256GB',
        '全国延保 延保两年',
      ],
    };
  },
  props: {
    showSkuPicker: Boolean,
  },
  mounted() {
  },
  methods: {
    closeSkuPicker() {
      this.$emit('getSkuPickFeedback', true);
    },
  },
};
</script>

<style lang="scss">
  #skuSelector {
    .overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba($black, 0.8);
      z-index: 9999;
    }
    .ok_btn_wrapper {
      background: $white;
      .ok_btn {
        width: 100%;
        background-image: linear-gradient(to right, $orange_left, $orange_right);
        color: $white;
        font-size: $font_size_16;
        margin: rem(10) 0;
        padding: rem(8) 0;
        border-radius: rem(40);
      }
    }
  }

  .show_popup {
    transform: translateY(0) !important;
    transition: 300ms all linear;
    will-change: transform;
  }

  .sku_selector_wrapper {
    position: fixed;
    bottom: 0;
    z-index: 9999;
    width: 100%;
    height: 82%;
    background: $white;
    border-top-left-radius: rem(12);
    border-top-right-radius: rem(12);
    transform: translateY(120%);
    transition: 300ms all linear;
    will-change: transform;
    .sku_close {
      position: absolute;
      width: rem(22);
      height: rem(22);
      top: rem(10);
      right: rem(10);
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAMAAAA0X5qLAAAAclBMVEUAAABdY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY20tW12wAAAAJXRSTlMA+AoFS+zkdiWiUUKruYIW8V3Uxj4xv6+NHZRuaTgP581rLdhsW1bF6wAAAaBJREFUOMuVlVeWwyAMRWGMG3biErf0MqP9b3EQLqIkOYf3E6zcvMhCCOaokqch4QA8GU6yYl8UNTuwtGuiT+g5AU/J+S3etYCKx1T2WdbLdIwB1Xa+7R5QpYiMmCgBtXfMf0aNZq5HpvHxx2IHFboL9kbiDgCDQUdYhMOHQlUHLAtlMuGj8WMnRbSatn9CX2J9Gr3Fsk4Akq+bVSExu2HRCvZVBRYQF7caIF+LnVvFO56mJbscoL6pzxSAH+dQA5BkBvsLkC5LPi9bNKY3jV/bhmCrNGyzblXIzDidaWInM+uMPdXXjFl0j6tXTCxKPT7Rv2Q2XV8Z62NdAFKJ2T505qSLpq81YNx2eaC9ZC7Nkf2zwhLTVdGOuTTq4pwNFUK4Z7Ym2PIl9Qj7zoIjzAvf2c+5gVlceDl71Wg0JznRVA23zpclA0E01dnZwTNWuVsz542zg9QbtH9aBcc+snrD6jq5dgbRhdF1dj+na88RvTf62T4pt9weM9f2cDROSsgZDDrdIXMjZCIFzbqQKRoyn0Mmf8CdEnxbhd+DQTfsPweDSEtbXT+MAAAAAElFTkSuQmCC) no-repeat;
      background-size: contain;
    }
    .sku_selector_container {
      padding: rem(12);
      .sku_intro {
        display: flex;
        align-items: flex-end;
        padding-bottom: rem(12);
        border-bottom: 1px solid $_background_gray;
        .sku_intro_detail {
          margin-left: rem(12);
          .price {
            font-size: $font_size_18;
            color: $orange;
            line-height: 1.8;
          }
          .sku_txt {
            line-height: 1.4;
            margin-bottom: rem(4);
          }
        }
      }
      .sku_list_wrapper {
        overflow-y: scroll;
        height: rem(268);
        -webkit-overflow-scrolling: touch;
      }
      .sku_list_container {
        padding-bottom: rem(12);
        border-bottom: 1px solid $_background_gray;
        &:last-child {
          border-bottom: none;
        }
        .sku_attr_name {
          font-size: $font_size_16;
          font-weight: 400;
          padding: rem(12) 0;
        }
        .sku_item {
          display: inline-block;
          background: $delete_dialog_background;
          color: $black;
          margin: 0 rem(14) rem(10) 0;
          padding: rem(8) rem(14);
          border-radius: rem(20);
        }
        .selected {
          color: $white;
          background-image: linear-gradient(
              to right,
              $orange_left 100%,
              $orange_right 100%
          );
        }
      }
    }
  }
</style>
