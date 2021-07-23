import {
  config,
  Filterables,
  StateContainer,
  StateContainerClass,
} from '@ezy/makina';

export declare class SvelteMakina<S> extends StateContainer<S> {
  public subscribe(
    listener: (stateMachine: Filterables<Omit<this, 'subscribe'>>) => void
  ): () => boolean;
}

declare module '@ezy/makina' {
  interface Plugins<S> {
    svelte: (options?) => (Base: StateContainerClass) => typeof SvelteMakina;
  }
}

config.plugins.svelte = () => (Base: StateContainerClass) => {
  return class extends Base {
    public subscribe(
      listener: (stateMachine: Filterables<Omit<this, 'subscribe'>>) => void
    ): () => boolean {
      listener(this as Filterables<this>);
      return this.onStateChange(() => listener(this as Filterables<this>));
    }
  } as any;
};
