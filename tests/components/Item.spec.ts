import { mount } from '@cypress/vue'
import Item from '../../src/components/Item.vue'
import Overlay from '../../src/components/Overlay.vue'
import PurchaseRestrictionDialog from '../../src/components/PurchaseRestrictionDialog.vue'
import Total from '../../src/components/Total.vue'
import SkuSelector from '../../src/components/SkuSelector.vue'
import NoCommodities from '../../src/components/NoCommodities.vue'
import dataSource from '../../src/assets/mock/data'

const components = {
  Overlay,
  PurchaseRestrictionDialog,
  Total,
  SkuSelector,
  NoCommodities,
}

describe('测试 Item 组件', () => {
  it('', () => {
    mount(Item, {
      propsData: {
        vaildCommodities: dataSource.vaild_commodities,
        invaildCommodities: dataSource.invaild_commodities,
        vaildCommoditiesNum: 9,
        totalNum: 12,
      },
      extensions: { components },
    })

    cy.contains('.store_name', '上海世纪出版官方旗舰店').should('be.visible')
    cy.contains('.get_coupon', '领券').should('be.visible')
    cy.contains('.get_edit', '编辑').should('be.visible')
    cy.contains(
      '.commodity_title',
      ' 现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社 ',
    ).should('be.visible')
    cy.contains('.low_stock_warning', ' 限购三件 ').should('be.visible')
    cy.contains('.large_text', '36').should('be.visible')
    cy.contains('.sku_picker', ' 新版小熊维尼;大版松松 ').should('be.visible')

    cy.contains('.invaid_big_logo', '失效宝贝').should('be.visible')
    cy.contains('.remove_invaid_commodity', '清空失效宝贝').should('be.visible')
    cy.contains('.invaid_logo', '失效').should('be.visible')
    cy.contains(
      '.invaid_title',
      ' Microsoft/微软 Surface Pro M 4G 128G(第五代) 笔记本平板电脑二合一 ',
    ).should('be.visible')
    cy.contains('.invaid_reason', ' 货存不足 ').should('be.visible')
    cy.contains('.link_to_likely', '找相似').should('be.visible')

    cy.get('.radio_icon').click({ multiple: true, force: true })

    cy.get('.get_edit').click({ multiple: true, force: true })

    cy.get('.icon-move').click({ multiple: true, force: true })

    cy.get('.icon-add').click({ multiple: true, force: true })

    cy.get('.commodity_item_container:first')
      .trigger('touchstart', 'right')
      .trigger('touchstart', 'center')
      .trigger('touchend')
  })
})
