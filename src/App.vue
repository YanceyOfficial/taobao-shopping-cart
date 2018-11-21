<template>
  <div id='app'>
    <CommonHeader :totalNum='totalNum'></CommonHeader>
    <Item
      :vaildCommodities='vaildCommodities'
      :invaildCommodities='invaildCommodities'
      @handleTotalNum='handleTotalNum'
    >
    </Item>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonFooter from './components/commonFooter.vue';
import CommonHeader from './components/commonHeader.vue';
import Item from './components/item.vue';

export default {
  name: 'App',
  components: {
    Item,
    CommonFooter,
    CommonHeader,
  },
  data() {
    return {
      vaildCommodities: [],
      invaildCommodities: [],
      totalNum: 0,
      invaildCommoditiesNum: 0,
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    // 当删除了失效商品后，购物车总数也要相应减少
    invaildCommodities() {
      if (this.invaildCommodities.length === 0) {
        this.totalNum = this.totalNum - this.invaildCommoditiesNum;
      }
    },
  },
  methods: {
    async getData() {
      try {
        const res = await fetch('../data.json');
        const data = await res.json();
        this.vaildCommodities = data.vaild_commodities;
        this.invaildCommodities = data.invaild_commodities;
        for (let i = 0, l = this.vaildCommodities.length; i < l; i += 1) {
          this.totalNum += this.vaildCommodities[i].commodity_list.length;
        }
        this.totalNum += this.invaildCommodities.length;
        this.invaildCommoditiesNum += this.invaildCommodities.length;
      } catch (e) {
        console.log(new Error(e));
      }
    },
    handleTotalNum(params) {
      if (params) {
        this.totalNum -= 1;
      }
    },
  },
};
</script>

<style lang='scss'>
  #app {
    position: relative;
  }
</style>
