import { mount } from '@cypress/vue'
import PurchaseRestrictionDialog from '../../src/components/PurchaseRestrictionDialog.vue'

describe('测试 PurchaseRestrictionDialog 组件', () => {
  it('是否包含核心 sku 元素', () => {
    mount(PurchaseRestrictionDialog, {
      propsData: {
        warningMsg: 'hello, world!',
        isDialog: true,
      },
    })

    cy.contains('.cancel', '取消').should('be.visible')
    cy.contains('.ok', '确定').should('be.visible')
  })
})
