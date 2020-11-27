/* eslint-disable max-len */
<template>
  <section id="item">
    <ul class="store_list" v-if="totalNum !== 0">
      <!-- 有效的宝贝 -->
      <li
        class="store_item"
        ref="getStoreDOM"
        v-for="(store, storeIndex) in vaildCommodities"
        :key="store.store_id"
      >
        <div
          :class="[
            'store_wrapper',
            store.store_promotion.length === 0 ? '' : 'border_1px_bottom',
          ]"
        >
          <span class="store_basic">
            <label
              :for="`selectStoreAll_${store.store_id}`"
              class="radio_label"
              @change="handleOneStoreSelect($event)"
            >
              <input
                type="checkbox"
                :id="`selectStoreAll_${store.store_id}`"
                class="select_radio"
              />
              <i class="iconfont radio_icon icon-round"></i>
            </label>
            <i
              class="store_type_logo"
              :style="{
                backgroundImage: `url(${getStoreType(store.store_type)})`,
              }"
            ></i>
            <span class="store_name">{{ store.store_name }}</span>
            <i class="iconfont icon-more go_store_hp"></i>
          </span>
          <span class="store_attach">
            <span class="get_coupon" v-if="store.coupon">领券</span>
            <span class="get_edit" @click="toggleDelete(storeIndex)">编辑</span>
          </span>
        </div>
        <div
          class="store_activity_wrapper"
          v-if="store.store_promotion.length !== 0"
        >
          <span class="activity_title">本店活动</span>
          <span class="activity_content">{{ store.store_promotion }}</span>
        </div>
        <ul class="commodity_list">
          <li
            class="commodity_item"
            v-for="(commodity, commodityIndex) in store.commodity_list"
            :key="commodity.sku_id"
          >
            <div
              class="commodity_item_container"
              :id="`commodityItem_${store.store_id}_${commodity.sku_id}`"
              v-touch:swipe="handleSwiper(store.store_id, commodity.sku_id)"
            >
              <div class="radio_img_wrapper">
                <label
                  :for="`selectStoreOne_${store.store_id}_${commodity.sku_id}`"
                  class="radio_label"
                  @change="
                    handleOneSelect($event, {
                      skuId: commodity.sku_id,
                      curNum: commodity.cur_cart_num,
                      unitPrice: commodity.sku_unit_price,
                    })
                  "
                >
                  <input
                    type="checkbox"
                    :id="`selectStoreOne_${store.store_id}_${commodity.sku_id}`"
                    class="select_radio"
                    :data-cur="`${commodity.sku_id}_${commodity.cur_cart_num}_${commodity.sku_unit_price}`"
                  />
                  <i class="iconfont radio_icon icon-round"></i>
                </label>
                <img
                  :src="commodity.commodity_img"
                  :alt="commodity.commodity_name"
                  class="commodity_img"
                />
              </div>
              <div class="commodity_detail_wrapper">
                <h3 class="commodity_title">{{ commodity.commodity_name }}</h3>
                <p
                  class="warning tmall_wuyou_logo_wrapper"
                  v-if="commodity.is_tmall_wuyou"
                >
                  <img :src="tmall_wuyou_logo" alt="tmall_wuyou_logo" />
                </p>
                <p
                  class="sku_picker"
                  v-if="commodity.type_union.length !== 0"
                  @click="handleSkuSelect()"
                >
                  {{ commodity.type_union.join(';') }}
                </p>
                <div
                  v-for="(warning, index) in commodity.warning_msg"
                  :key="index"
                >
                  <p class="warning low_stock_warning">{{ warning }}</p>
                </div>
                <div class="handle_count_wrapper">
                  <span class="price_wrapper">
                    <span class="small_text">¥</span>
                    <span class="large_text">{{
                      commodity.sku_unit_price.toString().split('.')[0]
                    }}</span>
                    <span
                      class="large_text"
                      v-if="
                        commodity.sku_unit_price.toString().split('.')
                          .length === 2
                      "
                      >.</span
                    >
                    <span class="small_text">{{
                      commodity.sku_unit_price.toString().split('.')[1]
                    }}</span>
                  </span>
                  <span class="handle_count">
                    <!-- 减少数量需要传递四个参数，分别是 店铺索引/商品索引/当前数量/skuId -->
                    <i
                      class="iconfont icon-move handle_count_btn"
                      @click="
                        reduceCount(
                          storeIndex,
                          commodityIndex,
                          commodity.cur_cart_num,
                          commodity.sku_id,
                        )
                      "
                    ></i>
                    <span>{{ commodity.cur_cart_num }}</span>
                    <!-- 增加数量需要传递六个参数，分别是 店铺索引/商品索引/当前数量/购买上限/库存总量/skuId-->
                    <i
                      class="iconfont icon-add handle_count_btn"
                      @click="
                        addCount(
                          storeIndex,
                          commodityIndex,
                          commodity.cur_cart_num,
                          commodity.purchase_restriction_num,
                          commodity.sku_rest_stock,
                          commodity.sku_id,
                        )
                      "
                    ></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              class="delete_commodity"
              :id="`delete_${store.store_id}_${commodity.sku_id}`"
              @click="
                deleteCommodity(storeIndex, commodityIndex, commodity.sku_id)
              "
            >
              删除
            </div>
          </li>
        </ul>
      </li>

      <!-- 失效的宝贝 -->
      <li class="store_item" v-if="invaildCommodities.length > 0">
        <div class="invaid_title_wrapper">
          <span class="invaid_big_logo">失效宝贝</span>
          <span
            class="remove_invaid_commodity"
            @click="deleteInvaidCommodities()"
            >清空失效宝贝</span
          >
        </div>
        <ul class="commodity_list">
          <li
            class="commodity_item"
            v-for="commodity in invaildCommodities"
            :key="commodity.commodity_id"
          >
            <div class="commodity_item_container invaild_item_container">
              <span
                :class="['invaid_logo', commodity.pre_hot ? 'pre_hot' : '']"
                >{{ commodity.pre_hot ? '预热' : '失效' }}</span
              >
              <img
                :src="commodity.commodity_img"
                :alt="commodity.commodity_name"
                class="commodity_img invalid_img"
              />
              <div class="invaid_detail_wrapper">
                <h3 class="commodity_title invaid_title">
                  {{ commodity.commodity_name }}
                </h3>
                <p class="invaid_reason">{{ commodity.fail_reason }}</p>
                <p class="link_to_likely">找相似</p>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>

    <!-- no commodities -->
    <NoCommodities v-if="totalNum === 0"></NoCommodities>

    <!-- modal -->
    <div class="dialog_wrapper" v-show="showDialog">
      <Overlay></Overlay>
      <PurchaseRestrictionDialog
        :warningMsg="warningMsg"
        :isDialog="isDialog"
        @getDialogFeedback="getDialogFeedback"
      ></PurchaseRestrictionDialog>
    </div>

    <!-- total -->
    <Total
      :selectListLength="selectListLength"
      :curTotalPrice="curTotalPrice"
      @getSelectAllFeedback="getSelectAllFeedback"
      @getSubmitOderFeedback="getSubmitOderFeedback"
      ref="selectAllStatus"
      v-if="totalNum !== 0"
    ></Total>

    <!-- sku selector -->
    <SkuSelector
      class="hidden_sku_selector"
      :showSkuPicker="showSkuPicker"
      @getSkuPickFeedback="getSkuPickFeedback"
    ></SkuSelector>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import Overlay from '@/components/Overlay.vue'
import PurchaseRestrictionDialog from '@/components/PurchaseRestrictionDialog.vue'
import Total from '@/components/Total.vue'
import SkuSelector from '@/components/SkuSelector.vue'
import NoCommodities from '@/components/NoCommodities.vue'
import { storeType } from '@/shared/constants'
import {
  ValidCommodity,
  InvalidCommodity,
  SelectedCommodity,
} from '@/types/types'

@Component({
  components: {
    Overlay,
    PurchaseRestrictionDialog,
    Total,
    SkuSelector,
    NoCommodities,
  },
})
export default class Item extends Vue {
  @Prop() private vaildCommodities!: ValidCommodity[]

  @Prop() private invaildCommodities!: InvalidCommodity[]

  @Prop() private totalNum!: number

  private tmall_wuyou_logo =
    'https://gw.alicdn.com/tfs/TB10WFoJH9YBuNjy0FgXXcxcXXa-405-72.png'

  private showDialog = false

  private warningMsg = ''

  private isDialog = 0

  private selectList: SelectedCommodity[] = []

  private selectListLength = 0

  private curTotalPrice = 0

  private dialogFeedback = false

  private showSkuPicker = false

  private curStoreIndex = 0

  private curSkuIndex = 0

  private curSkuId = ''

  @Watch('selectList', { deep: true })
  handler() {
    this.selectListLength = this.selectList.length
    this.curTotalPrice = 0
    for (let i = 0, l = this.selectListLength; i < l; i += 1) {
      this.curTotalPrice +=
        this.selectList[i].curNum * this.selectList[i].unitPrice
    }
  }

  public getStoreType(typeNum: number) {
    const type = storeType[typeNum]
    return !type ? false : type
  }

  // 定时关闭对话框
  public closeDialog() {
    setTimeout(() => {
      this.showDialog = false
    }, 1000)
  }

  // skuId匹配
  public matchSkuId(skuId: string) {
    const result = this.selectList.findIndex(
      (skuItem) => skuItem.skuId === skuId,
    )
    return result
  }

  // 增加单品数量
  public addCount(
    storeIndex: number,
    commodityIndex: number,
    curNum: number,
    limitMaxNum: number,
    maxStockNum: number,
    skuId: string,
  ) {
    // 如果有限购条件
    if (limitMaxNum > 0) {
      // 如果增加一件的话将超过最大限购数
      if (curNum + 1 > limitMaxNum) {
        this.showDialog = true
        this.warningMsg = '亲，该宝贝不能购买更多哦～'
        this.isDialog = 0
        this.closeDialog()
      } else {
        this.vaildCommodities[storeIndex].commodity_list[
          commodityIndex
        ].cur_cart_num += 1

        if (this.matchSkuId(skuId) !== -1) {
          this.selectList[this.matchSkuId(skuId)].curNum += 1
        }
      }
      // 没有限购条件，数量只要不超过库存量即可
    } else if (curNum + 1 > maxStockNum) {
      this.showDialog = true
      this.isDialog = 0
      this.warningMsg = '亲，该宝贝不能购买更多哦～'
      this.closeDialog()
    } else {
      this.vaildCommodities[storeIndex].commodity_list[
        commodityIndex
      ].cur_cart_num += 1
      if (this.matchSkuId(skuId) !== -1) {
        this.selectList[this.matchSkuId(skuId)].curNum += 1
      }
    }
  }

  // 减少单品数量
  public reduceCount(
    storeIndex: number,
    commodityIndex: number,
    curNum: number,
    skuId: string,
  ) {
    if (curNum - 1 === 0) {
      this.showDialog = true
      this.isDialog = 0
      this.warningMsg = '受不了了，宝贝不能再减少了哦～'
      this.closeDialog()
    } else {
      this.vaildCommodities[storeIndex].commodity_list[
        commodityIndex
      ].cur_cart_num -= 1
      if (this.matchSkuId(skuId) !== -1) {
        this.selectList[this.matchSkuId(skuId)].curNum -= 1
      }
    }
  }

  // 全选按钮
  public handleSelectAll(type: boolean) {
    const selectAllDOM = document.querySelector('#selectAll')
    if (type) {
      selectAllDOM.nextElementSibling.classList.remove('icon-round')
      selectAllDOM.nextElementSibling.classList.add('icon-roundcheckfill')
      selectAllDOM.checked = true
      this.$refs.selectAllStatus.selectAllStatus = true
    } else {
      selectAllDOM.nextElementSibling.classList.add('icon-round')
      selectAllDOM.nextElementSibling.classList.remove('icon-roundcheckfill')
      selectAllDOM.checked = false
      this.$refs.selectAllStatus.selectAllStatus = false
    }
  }

  // 判断所有店铺是否被选中
  public getSelectStoreAll() {
    const selectStoreAllDOM = document.querySelectorAll(
      'input[id^=selectStoreAll]',
    )
    const selectAllDOM = document.querySelector('#selectAll')
    const result = Array.from(selectStoreAllDOM).every((item) => item.checked)

    if (result) {
      selectAllDOM.nextElementSibling.classList.remove('icon-round')
      selectAllDOM.nextElementSibling.classList.add('icon-roundcheckfill')
      selectAllDOM.checked = true
      this.$refs.selectAllStatus.selectAllStatus = true
    }
  }

  // 选择单品
  public handleOneSelect(e: Event, sku: SelectedCommodity) {
    const { skuId } = sku
    const storeId = e.target.id.split('_')[1]
    const curStoreDOM = document.querySelector(
      `input[id=selectStoreAll_${storeId}]`,
    )
    const curStoreCommoditiesDOMList = document.querySelectorAll(
      `input[id^=selectStoreOne_${storeId}]`,
    )

    // 取消选中时
    if (!e.target.checked) {
      this.selectList.splice(this.matchSkuId(skuId), 1)
      e.target.nextElementSibling.classList.add('icon-round')
      e.target.nextElementSibling.classList.remove('icon-roundcheckfill')

      // 若先点击了店铺全选 再去取消一件单品时 将店铺全选按钮熄掉
      curStoreDOM.nextElementSibling.classList.add('icon-round')
      curStoreDOM.nextElementSibling.classList.remove('icon-roundcheckfill')
      curStoreDOM.checked = false

      // 全选也要熄掉
      this.handleSelectAll(false)

      // 选中时
    } else {
      this.selectList.push(sku)
      e.target.nextElementSibling.classList.remove('icon-round')
      e.target.nextElementSibling.classList.add('icon-roundcheckfill')

      // 判断如果此时恰好一个商铺底下的商品全部被勾选 将店铺全选按钮点亮
      const result = Array.from(curStoreCommoditiesDOMList).every(
        (item) => item.checked,
      )

      if (result) {
        curStoreDOM.nextElementSibling.classList.remove('icon-round')
        curStoreDOM.nextElementSibling.classList.add('icon-roundcheckfill')
        curStoreDOM.checked = true
      }

      this.getSelectStoreAll()
    }
  }

  // 按商铺批量选择
  public handleOneStoreSelect(e: Event) {
    const storeId = e.target.id.split('_')[1]
    const commoditiesOfStore = document.querySelectorAll(
      `input[id^=selectStoreOne_${storeId}]`,
    )
    if (e.target.checked) {
      e.target.nextElementSibling.classList.remove('icon-round')
      e.target.nextElementSibling.classList.add('icon-roundcheckfill')
      for (let i = 0, l = commoditiesOfStore.length; i < l; i += 1) {
        if (!commoditiesOfStore[i].checked) {
          commoditiesOfStore[i].checked = true
          commoditiesOfStore[i].nextElementSibling.classList.remove(
            'icon-round',
          )
          commoditiesOfStore[i].nextElementSibling.classList.add(
            'icon-roundcheckfill',
          )

          const dataCurArr = commoditiesOfStore[i].dataset.cur.split('_')
          const sku = {
            skuId: dataCurArr[0],
            curNum: parseInt(dataCurArr[1], 10),
            unitPrice: parseFloat(dataCurArr[2]),
          }
          this.selectList.push(sku)
        }
      }
      this.getSelectStoreAll()
    } else {
      e.target.nextElementSibling.classList.add('icon-round')
      e.target.nextElementSibling.classList.remove('icon-roundcheckfill')
      for (let i = 0, l = commoditiesOfStore.length; i < l; i += 1) {
        commoditiesOfStore[i].checked = false
        commoditiesOfStore[i].nextElementSibling.classList.add('icon-round')
        commoditiesOfStore[i].nextElementSibling.classList.remove(
          'icon-roundcheckfill',
        )
        const dataCurArr = commoditiesOfStore[i].dataset.cur.split('_')
        this.selectList.splice(this.matchSkuId(dataCurArr[0]), 1)
        this.handleSelectAll(false)
      }
    }
  }

  // 获取全选按钮传递过来的信息
  public getSelectAllFeedback(isSelectedAll: boolean) {
    const allInputDOM = document.querySelectorAll('input')
    const commoditiesDOM = document.querySelectorAll(
      'input[id^=selectStoreOne]',
    )
    this.selectList.splice(0, this.selectList.length)
    if (isSelectedAll) {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of allInputDOM) {
        item.checked = true
        item.nextElementSibling.classList.remove('icon-round')
        item.nextElementSibling.classList.add('icon-roundcheckfill')
      }
      for (let i = 0, l = commoditiesDOM.length; i < l; i += 1) {
        const dataCurArr = commoditiesDOM[i].dataset.cur.split('_')
        const sku = {
          skuId: dataCurArr[0],
          curNum: parseInt(dataCurArr[1], 10),
          unitPrice: parseFloat(dataCurArr[2]),
        }
        this.selectList.push(sku)
      }
    } else {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of allInputDOM) {
        item.checked = false
        item.nextElementSibling.classList.add('icon-round')
        item.nextElementSibling.classList.remove('icon-roundcheckfill')
      }
    }
  }

  // 显示隐藏一个商铺下的所有商品的删除按钮
  public toggleDelete(storeIndex: number) {
    const curStoreDOM = this.$refs.getStoreDOM[storeIndex]
    const deleteDOM = curStoreDOM.querySelectorAll('.delete_commodity')
    const commodityDOM = curStoreDOM.querySelectorAll(
      '.commodity_item_container',
    )
    const editorTagDOM = curStoreDOM.querySelector('.get_edit')
    for (let i = 0, l = deleteDOM.length; i < l; i += 1) {
      deleteDOM[i].classList.toggle('show_delete')
      commodityDOM[i].classList.toggle('shrink_commodity_item')
    }
    if (editorTagDOM.innerText === '编辑') {
      editorTagDOM.innerText = '完成'
    } else {
      editorTagDOM.innerText = '编辑'
    }
  }

  // 左滑展示删除按钮
  public handleSwiper(storeId: string, skuId: string) {
    return (direction) => {
      const curCommodityDOM = document.querySelector(
        `#commodityItem_${storeId}_${skuId}`,
      )
      const curDeleteDOM = document.querySelector(`#delete_${storeId}_${skuId}`)
      if (direction === 'left') {
        curDeleteDOM.classList.add('show_delete')
        curCommodityDOM.classList.add('shrink_commodity_item')
      } else {
        curDeleteDOM.classList.remove('show_delete')
        curCommodityDOM.classList.remove('shrink_commodity_item')
      }
    }
  }

  // 删除无效商品
  public deleteInvaidCommodities() {
    this.showDialog = true
    this.warningMsg = '确定要删除失效产品吗？'
    this.isDialog = 1
  }

  // 删除单品
  public deleteCommodity(
    curStoreIndex: number,
    curSkuIndex: number,
    curSkuId: string,
  ) {
    this.showDialog = true
    this.warningMsg = '确定要删除这个宝贝吗？'
    this.isDialog = 2
    this.curStoreIndex = curStoreIndex
    this.curSkuIndex = curSkuIndex
    this.curSkuId = curSkuId
  }

  // 获取对话框传递过来的信息（确认删除无效商品 / 确认删除有效商品）
  public getDialogFeedback(type: number, confirmToDelete: boolean) {
    if (type === 1) {
      if (confirmToDelete) {
        this.invaildCommodities.splice(0, this.invaildCommodities.length)
        this.showDialog = false
      } else {
        this.showDialog = false
      }
    } else if (confirmToDelete) {
      this.vaildCommodities[this.curStoreIndex].commodity_list.splice(
        this.curSkuIndex,
        1,
      )
      if (
        this.vaildCommodities[this.curStoreIndex].commodity_list.length === 0
      ) {
        this.vaildCommodities.splice([this.curStoreIndex], 1)
      }

      this.$emit('handleTotalNum', true)

      // 在删除一件商品时，如果这件商品已经被选中，那么selectList需要做出变化，相应的总价/总数量也要发生变化
      const result = this.matchSkuId(this.curSkuId)
      if (result !== -1) {
        this.selectList.splice(result, 1)
      }
      this.showDialog = false
    } else {
      this.showDialog = false
    }
  }

  // todo
  // 显示隐藏sku picker
  public handleSkuSelect() {
    const bodyDOM = document.querySelector('body')
    bodyDOM.style.position = 'fixed'
    this.showSkuPicker = true
  }

  // 获取Sku Picker反馈以关闭
  public getSkuPickFeedback(isClosePicker: boolean) {
    const bodyDOM = document.querySelector('body')
    if (isClosePicker) {
      bodyDOM.style.position = 'relative'
      this.showSkuPicker = false
    }
  }

  // 获取提交订单的反馈
  public getSubmitOderFeedback() {
    if (this.selectList.length === 0) {
      this.showDialog = true
      this.isDialog = 0
      this.warningMsg = '您还没有选择宝贝哦～'
      this.closeDialog()
    } else {
      this.showDialog = true
      this.isDialog = 0
      this.warningMsg = '家里有矿啊，你还真买啊？！'
      this.closeDialog()
    }
  }
}
</script>

<style lang="scss" slot-scope>
#item {
  position: relative;
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
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

.icon-roundcheckfill {
  color: $orange !important;
}

.store_wrapper {
  display: flex;
  align-items: center;
  padding: rem(2) rem(10);
  .store_basic {
    display: flex;
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
        content: '';
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

.hidden_sku_selector {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 0;
  height: 100%;
  z-index: 9999;
}
</style>
