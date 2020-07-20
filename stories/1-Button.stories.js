import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
};

export const Text = () => ({
  template: hbs`<button {{action onClick}}>Hello Button</button>`,
  context: {
    onClick: action('clicked'),
  },
});

export const Emoji = () => ({
  template: hbs`
    <StoryTest@Button @buttonLabel="Foo" />
  `
});
