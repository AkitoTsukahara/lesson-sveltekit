<script lang="ts">
  import type { Placement } from '@popperjs/core'
  import ToolTip from './ToolTip.svelte'

  const variationPlacement = ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end', 'right-start', 'right', 'right-end', 'left-start', 'left', 'left-end']
  let placementRef: HTMLElement | undefined = undefined
  let placement: Placement = 'top'
  $: placement
  const text = 'TOOLTIP'
</script>

<div class="parent">
  {#if placementRef}
    <ToolTip {text} parentElementRef={placementRef} {placement} />
  {/if}
  <div class="test-element" bind:this={placementRef}>Sample Popper</div>
</div>

<select bind:value={placement}>
  {#each variationPlacement as value}
    <option value={value}>{value}</option>
  {/each}
</select>

<style lang="scss">
  .parent {
    padding: 100px;
    width: 600px;
    position: relative;
    border-radius: 10px;
    overflow-y: scroll;
    height: 200px;
    border: 1px solid rgba(18, 21, 46, 0.7);
    margin-bottom: 30px;

    &:before {
      content: "";
      display: block;
      height: 200px;
    }
    &:after {
      content: "";
      display: block;
      height: 300px;
    }

    &::-webkit-scrollbar{
      width: 10px;
    }
    &::-webkit-scrollbar-track{
      background-color: #ccc;
      border-radius: 0 10px 10px 0;
    }
    &::-webkit-scrollbar-thumb{
      background-color: rgba(18, 21, 46, 0.7);
      border-radius: 5px;
    }

  }
  .test-element {
    font-size: 40px;
    width: fit-content;
    margin: 0 auto;
  }
  select {
    display: flex;
    justify-content: center;
    font-size: 16px;
  }
</style>
