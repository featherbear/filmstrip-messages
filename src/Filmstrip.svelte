<script>
  import Tile from "./Tile.svelte";
  import { fade } from "svelte/transition";
  let items = [
    {src: "images/aug-16-psst-its-camping-time-nocal-2560x1440.jpg.png"},
    {src: "images/aug-16-psst-its-camping-time-nocal-2560x1440.jpg.png", content:
    `
    hellooo!
    <img src="images/aug-16-psst-its-camping-time-nocal-2560x1440.jpg.png" />
    `}
  ];

  items = [...items, ...items];
  items = [...items, ...items];

  items = [...items, ...items];
  items = [...items, ...items];
  items = [...items, ...items];
  items = [...items, ...items];

  import ContentLightbox from "./ContentLightbox.js";

  function showLightbox(item) {
    ContentLightbox.createLightbox({ data: item.content || item.src });
  }

  export let rotation = 0;
</script>

<style>
  .filmstrip {
    margin-right: 30px;
    margin-bottom: 30px;

    width: 200px;
    background-color: rgb(241, 240, 232);
    height: 100vh;
    /* transform: rotate(-15deg); */
    overflow-y: scroll;
    padding: 15px;

    -webkit-box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.3);
  }

  .spacer:not(:first-child) {
    margin-top: 15px;
  }
</style>

<div
  class="filmstrip"
  transition:fade={{ duration: 500 }}
  style={`transform: rotate(${rotation}deg); margin-right: ${200 * Math.abs(Math.sin(Math.abs(rotation)))}px`}>
  {#each items as item}
    <div class="spacer">
      <Tile on:click={() => showLightbox(item)} src={item.src} />
    </div>
  {/each}
</div>
