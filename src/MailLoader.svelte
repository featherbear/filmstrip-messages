<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { fade } from "svelte/transition";

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

    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
  }

  .centreStyle {
    width: 90%;
    height: 70%;
    max-width: 1024px;
  }
  .mail {
    background-color: #fdf9df;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
  }

  .lineContainer {
    position: absolute;
  }
  .lineContainer > div {
    height: 100%;
    border-radius: 8px;

    position: absolute;
    top: 0;
    width: 100%;
  }

  .lineContainer .lineOne {
    background: linear-gradient(
      to bottom right,
      transparent calc(50% - 1px),
      #cfcecb,
      transparent calc(50% + 1px)
    );
  }
  .lineContainer .lineTwo {
    background: linear-gradient(
      to top right,
      transparent calc(50% - 1px),
      #cfcecb,
      transparent calc(50% + 1px)
    );
  }

  .content {
    z-index: 1;
  }

  button {
    cursor: pointer;
    font-size: 1.5em;
    border-radius: 8px;
  }
</style>

<div class="mailContainer" transition:fade={{ delay: 100, duration: 300 }}>
  <div class="mail centreStyle">
    <div class="content">
      <button on:click={close}>Open</button>
    </div>

    <div class="lineContainer centreStyle">
      <div class="lineOne" />
      <div class="lineTwo" />
    </div>
  </div>
</div>
