<script lang="ts">
  import { page } from "$app/stores";

  import {
    responsiveWidth,
    spacingMargin,
    spacingMargin3,
  } from "$lib/constant";
  import type { PorfolioData } from "$lib/types";

  import Title from "./title.svelte";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import BaseCard from "./BaseCard.svelte";

  //const PodcastData: PodcastPageData = $page.data.PodcastsData;
  const Portfolio: PorfolioData = $page.data.mainData;
  let podcastList = Portfolio.podcastList;
</script>

<div id="podcasts" class="mx-auto {responsiveWidth} mt-24">
  <Title title="Podcasts" />

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
    {#each podcastList as item}
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
