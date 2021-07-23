<p align="center">
  <img src="https://fakeimg.pl/900x300/ffffff/333333/?text=svelte-makina&font=museo" alt="svelte-makina" />
</p>

<p align="center">Svelte bindings for Makina</p>

## Installation

```shell
npm i @ezy/svelte-makina
```

## Usage

`counter.ts`
```ts
import { createBase, Filterables } from '@ezy/makina';
import "@ezy/svelte-makina"

class Counter extends createBase()<number> {

  constructor(initialState = 0) {
    super(initialState);
  }

  public get display() {
    return `Times clicked: ${this.state}`;
  }

  public increment() {
    this.commit('increment', this.state + 1);
  }

  public decrement() {
    this.commit('decrement', this.state - 1);
  }
}

const counter: Filterables<Counter> = Counter.create();

export default counter;
```

`Counter.svelte`
```html
<script lang="ts">
	import counter from "./counter"
</script>

<h1>The count is {$counter.display}</h1>

<button on:click={counter.increment}>+</button>
<button on:click={counter.decrement}>-</button>
```

### On mutation

Svelte being based on mutation,
you will pretty quickly run into mutating your app state directly from your components, which destroy the entire point of having a state machine.

to avoid that kind of issues please consider to freeze the state of your state machine, [see here](https://www.npmjs.com/package/@ezy/makina#immutable-state-guarantee).

## Links

[Makina](https://www.npmjs.com/package/@ezy/makina)