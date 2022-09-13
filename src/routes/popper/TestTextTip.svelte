<script lang="ts">
  import type { Placement } from '@popperjs/core'
  import TextTip from './TextTip.svelte'

  let placementRef: HTMLElement | undefined = undefined
  export let placement: Placement = 'bottom'
  export let text: string
</script>

<div class="parent">
  {#if placementRef}
    <TextTip {text} parentElementRef={placementRef} {placement} />
  {/if}
  <div class="test-element" bind:this={placementRef}>湊あくあ</div>
</div>

<style lang="scss">
  .parent {
    padding: 100px;
    width: fit-content;
  }
  .test-element {
    font-size: 40px;
    width: fit-content;
  }
</style>
