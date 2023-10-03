<script lang="ts">
  import { page } from "$app/stores";
  import { responsiveWidth, spacingMargin } from "$lib/constant";
  import type { PorfolioData } from "$lib/types";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import Title from "./title.svelte";

  const Portfolio: PorfolioData = $page.data.mainData;
  // console.log(Portfolio.aboutMedia[1].link.slice(-3));
</script>

<!-- <div id="about" class="{responsiveWidth} z-10 {spacingMargin}  mx-auto">
  <Title title="About me" />

  <div
    class="flex max-md:flex-wrap justify-between max-md:mt-6 items-center gap-5"
  >
    <div class="space-y-5 z-10 text-2xl md:max-w-[60%]">
      {#each Portfolio.about as e}
        <p>{e}</p>
      {/each}
    </div>

    <div class=" md:max-w-[40%]">
      <Splide
        options={{
          arrows: false,
          pagination: false,
          type: "loop",
          speed: 1200,
          perPage: 1,
          autoplay: true,
          interval: 2000,
          perMove: 1,
        }}
      >
        {#each Portfolio.aboutMedia as item}
          <SplideSlide>
            {#if item.link.slice(-3) === "mp4"}
              <video src={item.link} autoplay loop muted playsinline />
            {:else}
              <img src={item.link} alt="undraw-Developer-activity-re-39tg" />
            {/if}
          </SplideSlide>
        {/each}
       
      </Splide>
     
    </div>
  </div>
</div> -->

<section
  id="about"
  class=" {responsiveWidth} {spacingMargin} flex flex-col space-y-5 md:space-y-14 items-center text-center mx-auto"
>
  <Title title="About Me" />

  <div class=" md:w-[80%] 2xl:w-[60%] text-center space-y-2 md:space-y-5">
    {#each Portfolio.about as e}
      <h1 class="text-md md:text-xl font-light text-white">
        {e}
      </h1>
    {/each}
  </div>
</section>
