<script lang="ts">
  import { onMount } from 'svelte'

  let photos = []
  onMount(async () => {
    const res = await fetch(`http://localhost:5173/album.json`);
    photos = await res.json();
  });
</script>

<h1>Photo album</h1>

<div class="photos">
  {#each photos as photo}
    <figure>
      <img src="{photo.thumbnailUrl}" alt="{photo.title}">
    </figure>
  {:else}
    <p>loading...</p>
  {/each}
</div>

<style>
    .photos {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
    }

    figure, img {
        width: 100%;
        margin: 0;
    }
</style>
