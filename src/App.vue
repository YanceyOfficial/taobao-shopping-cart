<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <Item></Item>
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
    CommonHeader
  },
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      fetch("../src/assets/mock/data.json").then(response => {
        console.log(response)
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  position: relative;
}
</style>
