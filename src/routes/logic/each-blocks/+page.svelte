<script>
  let cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
  <!-- open each block -->
  {#each cats as cat, index}
    <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
      {index +1 } : {cat.name}
    </a></li>
  {/each}
  <!-- close each block -->
</ul>
