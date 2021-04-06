import { render } from '@testing-library/svelte';

import { State } from '../src/index';

import Button from './components/Button.svelte';
import Button2 from './components/Button2.svelte';
import { Core } from './components/core';

test('Component should update accordingly when state change', async () => {
  const core = new Core();

  const { getByText } = render(Button, {
    props: {
      label: State(core, (state) => state.label),
    },
  });

  expect(() => getByText(core.state.label as any)).not.toThrow();

  // for some reason we need to wait for the component to update
  await core.changeLabel('data changed from state machine');

  expect(() =>
    getByText('data changed from state machine' as any)
  ).not.toThrow();
});


test('State can be used without selector', async () => {
  const core = new Core();

  const { getByText } = render(Button2, {
    props: {
      state: State(core),
    },
  });

  expect(() => getByText(core.state.label as any)).not.toThrow();

  // for some reason we need to wait for the component to update
  await core.changeLabel('data changed from state machine');

  expect(() =>
    getByText('data changed from state machine' as any)
  ).not.toThrow();
});