import { createBase } from '@ezy/makina';

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

export const core = new Core();
