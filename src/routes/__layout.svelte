<script lang="ts">
  import CommonHeader from '$lib/components/page/common/CommonHeader.svelte'
  import CommonFooter from '$lib/components/page/common/CommonFooter.svelte'
</script>

<div class="layout">
    <div class="header">
        <CommonHeader/>
    </div>

    <div class="container">
        <slot/>
    </div>

    <CommonFooter/>
</div>

<style lang="scss">
    .layout {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .header {
        margin-bottom: 10px;
    }

    .container {
        flex-grow: 1;
    }
</style>
