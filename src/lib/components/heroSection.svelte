<script lang="ts">
  import { page } from "$app/stores";
  import { responsiveWidth, spacingMargin } from "$lib/constant";
  import type { PorfolioData } from "$lib/types";
  import Title from "./title.svelte";

  const Portfolio: PorfolioData = $page.data.mainData;
</script>

<!-- <div
  class="{responsiveWidth} z-10 space-y-5 flex flex-col justify-center items-center text-center my-20 mx-auto"
>
  <h3 class=" text-xl z-10 md:text-2xl">
    {@html Portfolio.tagline}
  </h3>
  <h1 class=" text-4xl z-10 text-white md:text-6xl md:max-w-[60%] font-bold r">
    {@html Portfolio.title}
  </h1>
  <p class="  text-xl z-10 md:text-2xl md:max-w-[70%]">
    {@html Portfolio.titleDesc}
  </p>
</div> -->

<div>
  <div
    class="{responsiveWidth} {spacingMargin} text-center space-y-4 mx-auto text-3xl"
  >
    <h1 class="font-exo text-5xl font-semibold text-white">
      {@html Portfolio.title ?? ""}
    </h1>
    <h1 class="font-exo text-3xl text-nred font-medium">
      {@html Portfolio.tagline ?? ""}
    </h1>
  </div>
</div>
<section class=" {responsiveWidth} {spacingMargin} text-center mx-auto">
  <div class=" md:w-[70%] mx-auto text-center space-y-2 md:space-y-4">
    <h1 class="text-3xl max-md:text-xl font-exo text-white">
      {@html Portfolio.titleDesc}
    </h1>
    <!-- <h1 class="">
      - HacktivSpace Community
    </h1> -->
  </div>
</section>

<!-- <section
  id="about"
  class=" {responsiveWidth} {spacingMargin} flex flex-col space-y-5 md:space-y-14 items-center text-center mx-auto"
>
  <Title title="Who are we?" />

  <div class=" md:w-[80%] 2xl:w-[60%] text-center space-y-2 md:space-y-5">
    {#each Portfolio.about as e}
      <h1 class="text-md md:text-xl font-light text-white">
        {@html e}
      </h1>
    {/each}
  </div>
</section> -->
