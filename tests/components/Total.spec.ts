import { mount } from '@cypress/vue'
import Total from '../../src/components/Total.vue'

describe('测试 Total 组件', () => {
  it('如果传入的 totalNum 为 20, 标题应该显示 "购物车(20)"', () => {
    mount(Total, {
      propsData: {
        selectListLength: 12,
        vaildCommoditiesNum: 12,
        curTotalPrice: 1000,
      },
    })

    cy.contains('.settle_btn', '结算(12)').should('be.visible')
  })
})
