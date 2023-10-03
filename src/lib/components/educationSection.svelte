<script lang="ts">
  import { page } from "$app/stores";

  import {
    responsiveWidth,
    spacingMargin,
    spacingMargin3,
  } from "$lib/constant";
  import type { PorfolioData } from "$lib/types";

  import Title from "./title.svelte";
  // @ts-ignore
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import BaseCard from "./BaseCard.svelte";

  const Portfolio: PorfolioData = $page.data.mainData;

  let educationList = Portfolio.educationList;
</script>

<div id="education" class="mx-auto {responsiveWidth} mt-24">
  <Title title="Education" />

  <Splide
    options={{
      arrows: false,
      pagination: false,
      type: "loop",
      speed: 1200,

      perPage: 3,
      breakpoints: {
        "640": {
          perPage: 1,
        },
        "768": {
          perPage: 3,
        },
        "1024": {
          perPage: 4,
        },
      },
      gap: "3rem",
      autoplay: true,
      interval: 2000,
      perMove: 1,
    }}
    class="flex  {spacingMargin3} md:{spacingMargin}  hover:transition-all  mx-auto duration-300 flex-wrap gap-6 md:gap-9 justify-center align-middle"
  >
    {#each educationList as item}
      <SplideSlide>
        <BaseCard
          title={item.title}
          description={item.desc}
          image={item.image}
        />
      </SplideSlide>
    {/each}
  </Splide>
</div>
