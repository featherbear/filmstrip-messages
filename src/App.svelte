<script>
  export let name;

  import Filmstrip from "./Filmstrip.svelte";

  import MailLoader from "./MailLoader.svelte";
  let showIntro = true;

  function doHideIntro() {
	  showIntro = false;
  }
</script>

<style>

</style>



{#if showIntro}
  <MailLoader on:destroy={doHideIntro} />
{:else}
<Filmstrip />

<Filmstrip />
{/if}
