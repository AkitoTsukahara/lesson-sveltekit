<script lang="ts">
  import Close from '../icon/close/Close.svelte'
  import { createEventDispatcher } from 'svelte'
  import { createPopper, type Placement } from '@popperjs/core'
  import Portal from 'svelte-portal'
  import { sameWidthModifier } from '$lib/package/dom/popperModifiers'

  export let text = ''
  let ref: HTMLElement | undefined = undefined
  export let parentElementRef: HTMLElement
  export let placement: Placement = 'top'
  export let usePortal = false
  export let useSameWidthModifier = false

  const dispatch = createEventDispatcher()
  function close() {
    dispatch('closed')
  }

  $: if (parentElementRef && ref) {
    createPopper(parentElementRef, ref, {
      placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        },
        ...(useSameWidthModifier ? ([sameWidthModifier] as const) : [])
      ]
    })
  }
</script>

{#if usePortal}
  <Portal>
    <div class="tool-tip" bind:this={ref} data-popper-placement={placement}>
      <div class="text">
        {@html text.replace(/\n/g, '<br>')}
      </div>
      <div class="close-icon" on:click={close}><Close /></div>
      <div data-popper-arrow class="arrow" />
    </div>
  </Portal>
{:else}
  <div class="tool-tip" bind:this={ref} data-popper-placement={placement}>
    <div class="text">
      {@html text.replace(/\n/g, '<br>')}
    </div>
    <div class="close-icon" on:click={close}><Close /></div>
    <div data-popper-arrow class="arrow" />
  </div>
{/if}

<style lang="scss">
  .tool-tip {
    position: relative;
    background: rgba(18, 21, 46, 0.7);
    box-shadow: 0 0 8px rgba(74, 80, 158, 0.5);
    border-radius: 10px;
    z-index: 1;
    width: max-content;

    .text {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: $text-white;
      padding: 16px;
    }

    .arrow {
      border: 7px solid transparent;
    }

    &[data-popper-placement^='top'] > .arrow {
      border-top: 14px solid rgba(18, 21, 46, 0.7);
    }

    &[data-popper-placement^='bottom'] > .arrow {
      border-bottom: 14px solid rgba(18, 21, 46, 0.7);
      top: -21px;
    }

    .arrow::before {
      content: '';
      transform: rotate(45deg);
    }

    .close-icon {
      display: flex;
      width: 12px;
      height: 12px;
      position: absolute;
      top: 6px;
      right: 6px;
      cursor: pointer;
    }
  }
</style>
