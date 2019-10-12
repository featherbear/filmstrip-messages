<script>
  export let name;

  import Filmstrip from "./Filmstrip.svelte";

  import MailLoader from "./MailLoader.svelte";

  let showIntro = false;

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
  <MailLoader on:destroy={doHideIntro} />
{:else}
  <div class="overflowContainer">
    <Filmstrip rotation="20" />
    <Filmstrip rotation="-8" />
    <Filmstrip rotation="3" />
    <Filmstrip rotation="-1" />

  </div>
{/if}
