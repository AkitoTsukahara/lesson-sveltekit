<script lang="ts">
  import CommonHeader from '$lib/components/page/common/CommonHeader.svelte'
  import CommonFooter from '$lib/components/page/common/CommonFooter.svelte'
  import CommonSideMenu from '$lib/components/page/common/CommonSideMenu.svelte'
</script>

<div class="layout">
    <div class="header">
        <CommonHeader/>
    </div>

    <div class="wrapper">
        <div class="side">
            <CommonSideMenu/>
        </div>

        <div class="main">
            <div class="container">
                <slot/>
            </div>
        </div>
    </div>

    <CommonFooter/>
</div>

<style lang="scss">
    :global(body) {
        margin: 0;
        padding: 0;
        background: #f2eee2;
    }

    .layout {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .container {
        flex-grow: 1;
    }

    .wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .side {
        display: inline-flex;
        background: gray;
        width: 360px;
        height: calc(100vh - 160px);
    }

    .main {
        display: inline-flex;
        flex: 1;
        background: whitesmoke;
        height: calc(100vh - 160px);
    }
</style>
