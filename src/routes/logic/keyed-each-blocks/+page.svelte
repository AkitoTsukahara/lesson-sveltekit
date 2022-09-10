<script>
  import Thing from './Thing.svelte';

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ];

  function handleClick() {
    things = things.slice(1);
  }
</script>

<button on:click={handleClick}>
  Remove first thing
</button>

{#each things as thing (thing.id)}
  <Thing name={thing.name}/>
{/each}


memo<br/>
Svelte は内部的に Map を使用しているので、どんなオブジェクトでもキーとして使用できます。<br/>
つまり (thing.id) の代わりに (thing) を使うことができます。<br/>
しかし、文字列または数値を使用する方が一般的に安全です。<br/>
なぜなら、例えばAPIサーバーからの新しいデータで更新する場合に、参照が等しくなくても同一性が持続することを意味するからです。
