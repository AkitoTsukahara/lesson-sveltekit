<script lang="ts">
  import { menuList } from './MenuList'
  export let pathname: string
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
          {#if link === pathname}
          <a class="now-page" href={link}>{text}</a>
          {:else}
          <a href={link}>{text}</a>
          {/if}
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
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      color: whitesmoke;
      padding: 4px 0;

      a {
        display: block;
        color: whitesmoke;
        text-decoration: none;

        &.now-page {
          font-size: 16px;
          font-weight: bold;
          text-decoration: underline;
          color: #FFFF00;
        }

        &:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
      }
      &.nested-link {
        margin-left: 20px;
      }
    }
  }
</style>
