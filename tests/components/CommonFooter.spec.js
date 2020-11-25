/// <reference types="cypress" />

import { mount } from '@cypress/vue'
import CommonFooter from '@/components/CommonFooter.vue'

describe('测试 CommonFooter 组件', () => {
  it('是否包含首页, 购物车, 我的淘宝, 心水, 更多 tab item', () => {
    mount(CommonFooter)

    cy.contains('p', '首页').should('be.visible')
    cy.contains('p', '购物车').should('be.visible')
    cy.contains('p', '我的淘宝').should('be.visible')
    cy.contains('p', '心水').should('be.visible')
    cy.contains('p', '更多').should('be.visible')
  })
})
