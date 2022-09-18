<script>
  import Inner from './Inner.svelte'
</script>

<Inner on:message/>

省略せずに書くこと以下のようになる（コード中に記入）

```
<!--script>
  import Inner from './Inner.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function forward(event) {
    dispatch('message', event.detail);
  }
</script>

<Inner on:message={forward}/>
</div -->
```

