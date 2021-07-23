import { createBase } from '@ezy/makina';
import '../../index';

/**
 * @ignore
 */
export class Core extends createBase()<{ label: string }> {
  constructor(initalState?: { label: string }, IO?: never, options?: never) {
    super({ label: 'a beautiful button', ...initalState }, IO, options);
  }

  changeLabel(text: string) {
    this.commit('labelChanged', {
      label: text,
    });
  }
}
