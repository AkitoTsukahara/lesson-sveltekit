<script>
  let count = 0;

  // 任意の処理をリアクティブに発火させることができる
  $: if (count >= 10) {
    alert('count is dangerously high!');
    count = 9;
  }

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
