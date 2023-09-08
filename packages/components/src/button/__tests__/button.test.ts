import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import UxButton from '../button.vue';
// The component to test
describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(UxButton, {
      slots: {
        default: 'ux-web-base'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('ux-web-base');
  });
  it('should have class', () => {
    const wrapper = mount(UxButton, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('ux-button--primary');
  });
});
