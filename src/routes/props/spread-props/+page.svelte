<script lang="ts">
  import Info from './Info.svelte';

  const pkg = {
    name: 'svelte',
    version: 3,
    speed: 'blazing',
    website: 'https://svelte.dev'
  };
</script>

<Info {...pkg}/>


memo
オブジェクトがプロパティを持っている場合、それぞれ個別に指定する代わりに、コンポーネントに展開することができる。
