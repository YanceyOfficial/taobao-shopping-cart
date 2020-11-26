import { mount } from '@cypress/vue'
import NoCommodities from '@/components/NoCommodities.vue'

describe('测试 NoCommodities 组件', () => {
  it('当购物车中的商品全被删除了, 就展示该组件.', () => {
    mount(NoCommodities)

    // 将所有的商品删除
    // cy.$$('.commodity_title').forEach($el => {
    //   $el.trigger('touchstart')
    // })

    cy.contains('p', '购物车快饿瘪了T.T').should('be.visible')
    cy.contains('p', '主人快给我挑点宝贝吧').should('be.visible')
    cy.contains('p', '去逛逛').should('be.visible')
  })
})
