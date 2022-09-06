<script lang="ts">
	type menu = {
		name: string;
		link?: string;
		nest?: menu[];
	};

	const menuList: menu[] = [
		{
			name: 'TOP',
			link: '/'
		},
		{
			name: 'Introduction',
			link: '',
			nest: [
				{
					name: 'Basic',
					link: '/introduction/basics'
				},
				{
					name: 'Adding Data',
					link: '/introduction/adding-data'
				},
				{
					name: 'Dynamic Attributes',
					link: '/introduction/dynamic-attributes'
				},
				{
					name: 'Styling',
					link: '/introduction/styling'
				},
				{
					name: 'Nested Components',
					link: '/introduction/nested-components'
				},
				{
					name: 'HTML tags',
					link: '/introduction/html-tags'
				},
				{
					name: 'Making an App',
					link: '/introduction/making-an-app'
				}
			]
		}
	];
</script>

<div>
	<ul>
		{#each menuList as { name, link, nest }, i}
			{#if nest !== undefined}
				<li>
					{i + 1}
					{name}
				</li>
				{#each nest as { name, link, nest }, i}
					<li class="nested-link">
						<a href={link}>{name}</a>
					</li>
				{/each}
			{:else}
				<li>
					<a href={link}>{i + 1} {name}</a>
				</li>
			{/if}
		{/each}
	</ul>
</div>

<style lang="scss">
	ul li {
		color: whitesmoke;
	}
	ul li a {
		color: whitesmoke;
		text-decoration: underline;
	}
	ul li a:hover {
		opacity: 0.6;
	}
	.nested-link {
		margin-left: 20px;
	}
</style>
