<script lang="ts">
  import { page } from "$app/stores";
  import { responsiveWidth } from "$lib/constant";
  import type { PorfolioData } from "$lib/types";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import SkillCard from "./SkillCard.svelte";
  import Title from "./title.svelte";
  const Portfolio: PorfolioData = $page.data.mainData;
</script>

<div id="skills" class="{responsiveWidth} space-y-14 mt-24 mx-auto">
  <Title title="Skills" />

  <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each Portfolio.skillList as item}
      <SkillCard skill={item} />
    {/each}
  </div> -->

  <Splide
    options={{
      arrows: false,
      pagination: false,
      type: "loop",
      speed: 1200,

      perPage: 4,
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
    class="flex   hover:transition-all  mx-auto duration-300 flex-wrap gap-6 md:gap-9 justify-center align-middle"
  >
    {#each Portfolio.skillList as item}
      <SplideSlide>
        <SkillCard skill={item} />
      </SplideSlide>
    {/each}
  </Splide>
</div>

<!-- <div
class="  border border-nred rounded-2xl flex items-center justify-between px-4 py-3"
>
<h2 class="text-xl md:text-4xl font-semibold text-white">
  {item.name}
</h2>

<div class="h-20 w-52">
  <img
    src={item.image}
    alt={item.name}
    class="h-full w-full object-cover rounded-2xl"
  />
</div>
</div> -->
