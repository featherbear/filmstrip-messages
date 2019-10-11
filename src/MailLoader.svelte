<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function close() {
    dispatch("destroy");
  }
</script>

<style>
  .mailContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30;

    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
  }

  .mail {
    background-color: red;
    width: 90%;
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8xpx;
  }

  button {
    cursor: pointer;
  }
</style>

<div class="mailContainer">
  <div class="mail">
    <div>
      <p>Hey :)</p>
      <button on:click={close}>Close</button>
    </div>
  </div>

</div>
