<script lang="ts">
  import { menuList } from './MenuList'
</script>


<ul>
  {#each menuList as { text, link, nest }, i}
    {#if nest !== undefined}
      <li>
        {i + 1}
        {text}
      </li>
      {#each nest as { text, link, nest }, i}
        <li class="nested-link">
          <a href={link}>{text}</a>
        </li>
      {/each}
    {:else}
      <li>
        <a href={link}>{i + 1} {text}</a>
      </li>
    {/if}
  {/each}
</ul>

<style lang="scss">
  ul li {
    color: whitesmoke;
    padding: 4px 0;
  }
  ul li a {
    color: whitesmoke;
    text-decoration: underline;
  }
  ul li a:hover {
    opacity: 0.6;
  }
  .nested-link {
    margin-left: 20px;
  }
</style>
