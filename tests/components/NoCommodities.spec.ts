import { mount } from '@cypress/vue';
import NoCommodities from '../../src/components/NoCommodities.vue';

describe('测试 NoCommodities 组件', () => {
    it('当购物车中的商品全被删除了, 就展示该组件.', () => {
        mount(NoCommodities);

        cy.contains('.no_commodities_warning', '购物车快饿瘪了T.T').should('be.visible');
        cy.contains('.no_commodities_suggest', '主人快给我挑点宝贝吧').should('be.visible');
        cy.contains('.link_to_home', '去逛逛').should('be.visible');
    });
});
