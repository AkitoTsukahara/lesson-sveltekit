<script>
  import InputField from './InputField.svelte';

  let field;
</script>

<InputField bind:this={field}/>

<button on:click={() => field.focus()}>Focus field</button>

<p>DOM要素にバインドできるのと同じように、コンポーネントのインスタンス自体にもバインドできます。</p>
