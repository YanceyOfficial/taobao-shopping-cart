import { mount } from "@cypress/vue";
import SkuSelector from "../../src/components/SkuSelector.vue";

describe("测试 SkuSelector 组件", () => {
  it("测试", () => {
    mount(SkuSelector, { propsData: { showSkuPicker: true } });

    cy.contains(".price", "¥ 7688").should("be.visible");
    cy.contains(".stock", "库存：8").should("be.visible");
    cy.contains(".cur_select", "已选：银灰色 深酒红键盘套装 WIFI 256GB 全国延保 延保两年").should(
      "be.visible"
    );
    cy.contains(".sku_attr_name", "套餐类型").should("be.visible");
  });
});
