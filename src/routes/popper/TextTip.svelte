<script lang="ts">
  import { createPopper, type Placement } from '@popperjs/core'

  export let text = ''
  let ref: HTMLElement | undefined = undefined
  export let parentElementRef: HTMLElement
  export let placement: Placement = 'top'

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
      ]
    })
  }
</script>

<div class="tool-tip" bind:this={ref} data-popper-placement={placement}>
  <div class="text">
    {@html text.replace(/\n/g, '<br>')}
  </div>
  <div data-popper-arrow class="arrow" />
</div>

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
      color: #fff;
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
  }
</style>
