<script>
  export let src;
</script>

<style>
  .tile {
    width: 100%;
    min-height: 150px;
    cursor: pointer;

    background-size: cover;
    background-position: center;

    transform: scale(0.98);
    transition: transform 0.2s;

    text-align: center;
    border-radius: 1px;
  }

  .tile:hover {
    transform: scale(1);
  }
</style>

<div class="tile" on:click style={`background-image: url(${src});`}>
  <!-- <img {src} alt="" /> -->
</div>
