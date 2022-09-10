<script>
  async function getRandomNumber() {
    const res = await fetch(`https://svelte.jp/tutorial/random-number`);
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  let promise = getRandomNumber();

  function handleClick() {
    promise = getRandomNumber();
  }
</script>

<button on:click={handleClick}>
  generate random number
</button>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.media}</p>
{/await}


errorを省略した書き方もできる
{#await promise then value}
  <p>the value is {value}</p>
{/await}
