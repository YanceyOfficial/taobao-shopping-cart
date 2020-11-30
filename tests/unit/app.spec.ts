import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CommonHeader from '@/components/CommonHeader.vue';

describe('CommonHeader.vue', () => {
    it('renders props.totalNum when passed', () => {
        const totalNum = 'new message';
        const wrapper = shallowMount(CommonHeader, {
            propsData: { totalNum },
        });
        expect(wrapper.text()).to.include(totalNum);
    });
});
