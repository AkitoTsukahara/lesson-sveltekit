<script lang="ts">
  let count = 0;

  function incrementCount () {
    count += 1
  }
</script>

<button on:click={incrementCount}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

