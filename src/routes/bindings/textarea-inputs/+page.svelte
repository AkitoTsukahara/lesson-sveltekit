<script>
  import { marked } from 'marked';
  let value = `Some words are *italic*, some are **bold**
  - aaaaa
- bbbbb
  - 11111
  `;
</script>

{@html marked(value)}

<textarea bind:value={value}></textarea>

<style>
    textarea { width: 100%; height: 200px; }
</style>
