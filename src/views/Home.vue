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

@Component({
  components: {
    CommonHeader,
    CommonFooter,
    Item,
  },
})
export default class Home extends Vue {
  private vaildCommodities: any[] = []

  private invaildCommodities: any[] = []

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
    try {
      const res = await fetch('../data.json')
      const data = await res.json()
      this.vaildCommodities = data.vaild_commodities
      this.invaildCommodities = data.invaild_commodities
      for (let i = 0, l = this.vaildCommodities.length; i < l; i += 1) {
        this.totalNum += this.vaildCommodities[i].commodity_list.length
      }
      this.totalNum += this.invaildCommodities.length
      this.invaildCommoditiesNum += this.invaildCommodities.length
    } catch (e) {
      throw new Error(e)
    }
  }

  public handleTotalNum(params: any) {
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
