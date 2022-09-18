import { onDestroy } from 'svelte';

export function onInterval(callback: () => void, milliseconds: number | undefined) {
  const interval = setInterval(callback, milliseconds);

  onDestroy(() => {
    clearInterval(interval);
  });
}
