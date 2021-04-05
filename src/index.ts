import { BaseConstructor } from '@ezy/makina';
import { readable, Readable } from 'svelte/store';

export function State<SM extends InstanceType<BaseConstructor<any>>, R>(
  sm: SM,
  selector: (state: SM['state']) => R = (state) => state
): Readable<R> {
  return readable(selector(sm.state), (set) =>
    sm.onStateChange((state) => set(selector(state)))
  );
}
