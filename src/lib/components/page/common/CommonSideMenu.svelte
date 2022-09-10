<script lang="ts">
  import MenuLink from '$lib/components/block/common/MenuLink.svelte'
  export let pathname
</script>

<div>
  <MenuLink pathname={pathname}/>
</div>
