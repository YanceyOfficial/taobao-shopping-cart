<template>
  <div>
    <CommonHeader :totalNum="totalNum" />
    <Item
      :vaildCommodities="vaildCommodities"
      :invaildCommodities="invaildCommodities"
      :totalNum="totalNum"
      @handleTotalNum="handleTotalNum"
    ></Item>
    <CommonFooter />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
import Item from '@/components/Item.vue'
import { requests } from '@/shared/utils'
import {
  ValidCommodity,
  InvalidCommodity,
  ShoppingCartData,
} from '@/types/types'

@Component({
  components: {
    CommonHeader,
    CommonFooter,
    Item,
  },
})
export default class Home extends Vue {
  private vaildCommodities: ValidCommodity[] = []

  private invaildCommodities: InvalidCommodity[] = []

  private totalNum = 0

  private invaildCommoditiesNum = 0

  public mounted() {
    this.getData()
  }

  @Watch('invaildCommodities')
  handler() {
    if (this.invaildCommodities.length === 0) {
      this.totalNum -= this.invaildCommoditiesNum
    }
  }

  public async getData() {
    const data = await requests<ShoppingCartData>('../data.json')
    this.vaildCommodities = data.vaild_commodities
    this.invaildCommodities = data.invaild_commodities
    this.totalNum = data.total_number
    this.invaildCommoditiesNum += this.invaildCommodities.length
  }

  public handleTotalNum(params: boolean) {
    if (params) {
      this.totalNum -= 1
    }
  }
}
</script>

<style lang='scss' slot-scope>
#app {
  position: relative;
}
</style>
