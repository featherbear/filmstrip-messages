<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { fly, fade } from "svelte/transition";

  function close() {
    dispatch("destroy");
  }

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
            document.querySelector("svg").classList.add("hov");
            document.querySelectorAll("#el_0eRWAjOgY *").forEach(e => {
              e.style.animationPlayState = "running";
            });
          },
          { once: true }
        );
        document
          .getElementById("el_S0iMzZ2Pc5_an_IvVquN_Ci")
          .addEventListener("click", function() {
            document.getElementById("el_AqJYz6K2xY").classList.add("fly");
            close();
          });
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
    width: 350px;
    margin: 0 auto;
    height: 100%;
  }

  #container .content {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    background-color: darkgrey;
  }

  #container .content :global(svg) {
    transition: transform 0.7s ease-out;
  }
  #container .content :global(svg.hov) {
    transform: translateY(15px);
  }

  /* Paper */
  :global(svg) #el_S0iMzZ2Pc5 {
    cursor: pointer;
    transition: transform 0.3s;
  }
  :global(svg) #el_S0iMzZ2Pc5:hover {
    transform: translateY(-10px);
  }

  :global(svg) #el_AqJYz6K2xY {
    transition: transform 0.7s;
  }
  :global(svg) #el_AqJYz6K2xY.fly {
    transform: translateY(-30%);
  }
</style>

<div id="bg" transition:fade={{ delay: 800, duration: 400 }}>
  <div id="container">
    <div class="content" transition:fly={{ y: 200, duration: 1600 }}>
      <img class="inject-me" src="messages_anim.svg" />
    </div>
  </div>
</div>
