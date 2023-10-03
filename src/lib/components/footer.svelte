<!-- <script lang="ts">
  import { page } from "$app/stores";
  import type { SocialLink } from "$lib/types";
  import Icon from "@iconify/svelte";

  let navlist = [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Education",
      url: "#education",
    },
    {
      name: "Projects",
      url: "#project",
    },
    {
      name: "Podcasts",
      url: "#podcast",
    },
    {
      name: "Achivements",
      url: "#achievements",
    },
  ];

  let socialLinks: SocialLink[] = $page.data.mainData.socialLinks;
</script>

<section>
  <div
    class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
  >
    <nav class="flex flex-wrap justify-center -mx-5 -my-2">
      {#each navlist as item}
        <div class="px-5 py-2">
          <a
            href={item.url}
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            {item.name}
          </a>
        </div>
      {/each}
    </nav>
    <div class="flex justify-center mt-8 space-x-6">
      {#each socialLinks as i}
        <a href={i.link} class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{i.name}</span>

          <Icon icon={i.icon} class="w-6 h-6" />
        </a>
      {/each}
    </div>
    <p class="mt-8 text-base leading-6 text-center text-gray-400">
      © 2023 Ambuj Shukla, Inc. All rights reserved.
    </p>
  </div>
</section>

 -->

<script lang="ts">
  import Icon from "@iconify/svelte";

  import { page } from "$app/stores";

  import type { Article, PorfolioData } from "$lib/types";

  const Portfolio: PorfolioData = $page.data.mainData;

  const ArticleList: Article[] = Portfolio.articleList;

  let navlist = [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Education",
      url: "#education",
    },

    {
      name: "Podcasts",
      url: "#podcasts",
    },
    {
      name: "Blogs",
      url: "#blogs",
    },
    {
      name: "Achievements",
      url: "#achievements",
    },
    {
      name: "Community",
      url: "https://linktr.ee/hacktivspacecommunity",
    },
    {
      name: "Gallery",
      url: "https://drive.google.com/drive/folders/1tEpsedSnxPB0RMlrllT4z2G2DfUl7GHj?usp=sharing",
    },
  ];
</script>

<footer aria-label="Site Footer" class=" border-t-2 border-nred">
  <div
    class="mx-auto max-w-screen-xl space-y-8 px-4 py-10 sm:px-6 lg:space-y-16 lg:px-8"
  >
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        {#if Portfolio.logo}
          <a href="/">
            <img src={Portfolio.logo} class="h-10" alt="ambuj" />
          </a>
        {:else}
          <a
            href="https://drive.google.com/drive/folders/1C7CTHJQXP_q4ao74-VYb2glp76HC8nKf"
            aria-label="Ambuj Shukla"
            class="hover:underline underline-offset-3 text-2xl font-extralight"
          >
            Ambuj Shukla
            <!-- <img src={logo} alt="Ambuj Shukla" class=" max-h-9 max-md:max-h-7" /> -->
          </a>
        {/if}

        <p class="mt-8 max-w-xs text-white">
          {@html Portfolio.titleDesc}
        </p>

        <ul class="mt-8 flex gap-6">
          {#each Portfolio.socialLinks as d}
            <li>
              <a href={d.link}>
                <Icon
                  icon={d.icon}
                  class="w-6 h-6 text-white hover:text-gray-300"
                />
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="flex flex-col justify-center w-full space-y-10 col-span-2">
        <div class="flex w-full uppercase flex-wrap gap-x-6 gap-y-4">
          {#each navlist as i}
            <a
              href={i.url}
              class="text-base font-medium text-white hover:text-gray-300"
            >
              {i.name}
            </a>
          {/each}
        </div>

        {#if ArticleList.length > 0}
          <div class="grid grid-cols-2 gap-x-6 gap-y-4">
            {#each ArticleList as item}
              <a href={item.link}>
                <div class=" text-white">
                  <h1 class="flex items-center">
                    <Icon class="mr-1" icon="ion:newspaper" />
                    {item.publishedAt}
                  </h1>
                  <p class="text-nred">{item.name}</p>
                </div>
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    <p class="text-xs text-gray-400">
      © 2023 Ambuj Shukla. All rights reserved.
    </p>
  </div>
</footer>
