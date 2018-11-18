<template>
  <div id='app'>
    <CommonHeader :totalNum="totalNum"></CommonHeader>
    <Item :vaildCommodities="vaildCommodities" :invaildCommodities="invaildCommodities"></Item>
    <Total></Total>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonFooter from "./components/commonFooter.vue";
import CommonHeader from "./components/commonHeader.vue";
import Total from "./components/total.vue";
import Item from "./components/item.vue";
export default {
  name: "App",
  components: {
    Total,
    Item,
    CommonFooter,
    CommonHeader,
  },
  data() {
    return {
      vaildCommodities: [],
      invaildCommodities: [],
      totalNum: 0,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const res = await fetch("../data.json");
        const data = await res.json();
        this.vaildCommodities = data.vaild_commodities;
        this.invaildCommodities = data.invaild_commodities;
        this.totalNum = data.total_number;
      } catch (e) {
        console.log(new Error(e));
      } finally {
      }
    }
  }
};
</script>

<style lang='scss'>
#app {
  position: relative;
}
</style>
