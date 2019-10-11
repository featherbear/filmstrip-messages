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

<Filmstrip />

<Filmstrip />

{#if showIntro}
  <MailLoader on:destroy={doHideIntro} />
{/if}
