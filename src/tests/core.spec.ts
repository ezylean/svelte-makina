import { render } from '@testing-library/svelte';

import Button from './components/Button.svelte';
import { Core } from './components/core';

test('Component should update accordingly when state change', async () => {
  const core = Core.create({
    label: 'initial label',
  });

  const { getByText } = render(Button, {
    props: {
      core,
    },
  });

  expect(() => getByText('initial label' as any)).not.toThrow();

  // for some reason we need to wait for the component to update
  await core.changeLabel('data changed from state machine');

  expect(() =>
    getByText('data changed from state machine' as any)
  ).not.toThrow();
});
