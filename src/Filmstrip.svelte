<script>
  import Tile from "./Tile.svelte";

  let items = [1, 2, 3, 4, 5, 6];
</script>

<style>
  .filmstrip {
    float: left;
    margin-right: 30px;
    margin-bottom: 30px;

    width: 200px;
    background-color: rgb(241, 240, 232);
    height: 100vh;
    transform: rotate(-15deg);
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

<div class="filmstrip">
  {#each items as item}
    <div class="spacer">
      <Tile />
    </div>
  {/each}
</div>
