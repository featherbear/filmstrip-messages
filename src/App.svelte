<script>
  export let name;

  import Filmstrip from "./Filmstrip.svelte";

  import Loader from "./Loader.svelte";

  let showIntro = true;

  function doHideIntro() {
    showIntro = false;
  }
</script>

<style>
  .overflowContainer {
    overflow-y: hidden;
    height: 100%;

    flex-basis: 200px;
    display: flex;
  }

  :global(.overflowContainer > *) {
    flex-shrink: 0;
  }

  
</style>

{#if showIntro}
  <Loader on:destroy={doHideIntro} />
{:else}
  <div class="overflowContainer">
    <Filmstrip rotation="20" />
    <Filmstrip rotation="-8" />
    <Filmstrip rotation="3" />
    <Filmstrip rotation="-1" />

  </div>
{/if}
