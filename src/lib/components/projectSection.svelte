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
  let projectList = Portfolio.projectList;
</script>

<div id="projects" class="mx-auto {responsiveWidth} mt-24">
  <Title title="Projects" />

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
    {#each projectList as item}
      <SplideSlide>
        <BaseCard
          title={item.name}
          description={item.desc}
          link={item.link}
          image={item.image}
        />
      </SplideSlide>
    {/each}
  </Splide>
</div>
