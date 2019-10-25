<script>
  import SVGInjector from "svg-injector";
  // Do the injection
  import { onMount } from "svelte";
  onMount(() => {
    SVGInjector(
      document.querySelectorAll("img.inject-me"),
      undefined,
      function() {
        document.getElementById("el_7lT4rIY3tJ0").addEventListener(
          "mouseover",
          function() {
            document.querySelector("svg").classList.add('hov');
            document.querySelectorAll("#el_0eRWAjOgY *").forEach(e => {
              e.style.animationPlayState = "running";
            });
          },
          { once: true }
        );
      }
    );
  });
</script>

<style>
  #bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: lightgrey;
    z-index: 20;
  }

  #container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin: 0 auto;
    height: 100%;
  }

  #container .content {
    border-radius: 50%;
    width: 250px;
    height: 250px;
    background-color: darkgrey;
  }
  #container .content :global(svg) {
    transition: transform 0.7s ease-out;
  }
  #container .content :global(svg.hov) {
    transform: translateY(15px);
  }

  /* Paper */
  :global(svg) #el_AqJYz6K2xY {
    cursor: pointer;
    transition: transform 0.3s;
  }
  :global(svg) #el_AqJYz6K2xY:hover {
    transform: translateY(-10px);
  }
</style>

<div id="bg">
  <div id="container">
  <div class="content">
    <img class="inject-me" src="messages_anim.svg" alt="WEEEE" />
    </div>
  </div>
</div>
