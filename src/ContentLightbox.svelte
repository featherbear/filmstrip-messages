<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function close() {
    dispatch("destroy");
  }

  import { fade } from "svelte/transition";

  export let data;
</script>

<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }

  .content {
    background-color: white;
    width: 90%;
    height: 90%;

    border-radius: 3px;

    text-align: center;
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; */
  }

  :global(.content > *) {
    width: 100%;
    max-height: 100%;
  }
</style>

<div class="lightbox" transition:fade={{ duration: 300 }}>
  <div class="background" on:click={close} />
  <div class="content">
    {@html data}
  </div>
</div>
