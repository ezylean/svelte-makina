<p align="center">
  <img src="https://fakeimg.pl/900x300/ffffff/333333/?text=svelte-makina&font=museo" alt="svelte-makina" />
</p>

<p align="center">Svelte bindings for Makina</p>

## Installation

```shell
npm i @ezy/svelte-makina
```

## Usage

core.ts
```ts
import { createBase } from "@ezy/makina"

export interface CoreState {
  label: string
}

export class Core extends createBase()<CoreState> {
  constructor(initalState?: CoreState, IO?: never, options?: any) {
    super({ label: 'a beautiful button', ...initalState }, IO, options);
  }

  public changeLabel(text: string) {
    this.commit('labelChanged', {
      label: text
    });
  }
}

export const core = new Core() 
```

Button.svelte
```html
<script>
  import { State } from "@ezy/svelte-makina"
  import { core } from "./core"

  export let label = State(core, state => state.label);
</script>

<button on:click={() => core.changeLabel("changed")}> {$label} </button>
```

### On mutation

Svelte being based on mutation,
you will pretty quickly run into mutating your app state directly from your components, which destroy the entire point of having a state machine.

So, to avoid that kind of issues please consider using the selector option to create a copy of your state for your components.

#### exemple
```html
<script>
  import { State } from "@ezy/svelte-makina"
  import copy from "fast-copy";
  import { core } from "./core"

  export let todos = State(core, state => copy(state.todos));
</script>

...
```

It also may be beneficial to freeze the state of your state machine, [see here](https://www.npmjs.com/package/@ezy/makina#immutable-state-guarantee).

## Links

[Makina](https://www.npmjs.com/package/@ezy/makina)