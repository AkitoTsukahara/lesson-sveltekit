<script lang="ts">
	import {page} from '$app/stores';
	import CommonHeader from '$lib/components/page/common/CommonHeader.svelte';
	import CommonFooter from '$lib/components/page/common/CommonFooter.svelte';
	import CommonSideMenu from '$lib/components/page/common/CommonSideMenu.svelte';

</script>

<div class="layout">
	<div class="header">
		<CommonHeader />
	</div>

	<div class="wrapper">
		<div class="side">
			<CommonSideMenu pathname={$page.url.pathname}/>
		</div>

		<div class="main">
			<div class="container">
				<slot />
			</div>
		</div>
	</div>

	<CommonFooter />
</div>

<style lang="scss">
	* {
		box-sizing: border-box;
	}
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
		padding: 24px;
	}

	.wrapper {
		display: flex;
		flex-wrap: wrap;
		height: calc(100vh);
	}

	.side {
		display: inline-flex;
		background: gray;
		width: 300px;
		height: calc(100vh);
		padding: 24px 16px;
		overflow-y: scroll;
	}

	.main {
		display: inline-flex;
		flex: 1;
		background: whitesmoke;
		height: calc(100vh);
	}

</style>
