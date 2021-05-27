import { StateMachine } from '@ezy/makina';
import { readable, Readable } from 'svelte/store';

export function State<
  SM extends StateMachine,
  R = SM['state']
>(sm: SM, selector: (state: SM['state']) => R = (state) => state): Readable<R> {
  return readable(selector(sm.state), (set) =>
    sm.onStateChange((state) => set(selector(state)))
  );
}
