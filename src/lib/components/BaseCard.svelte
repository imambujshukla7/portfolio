<script lang="ts">
  import type { Tech } from "$lib/types";
  import Icon from "@iconify/svelte";

  export let title: string;
  export let description: string;
  export let link: string | undefined = undefined;
  export let image: string;
  export let linkText: string = "Link";
  export let isProject: boolean = false;
  export let techl: Tech[] = [];
  export let isAchivement: boolean = false;
  export let isExp: boolean = false;
  export let postedAt: string = "";
  export let roll = "";

  export let isBlog: boolean = false;
</script>

<div class="rounded-xl bg-[#271c27] p-3 col-span-1">
  <div class="w-full">
    <img class="rounded-lg" src={image} alt="HacktivSpace" />
  </div>

  <h1 class="font-semibold text-2xl mt-2 text-white">{title}</h1>
  {#if isExp}
    <p class="text-md mt-1 text-white">
      Role - {roll}
    </p>
  {/if}

  {#if !isBlog}
    <p class="text-sm text-[#BD9494]">
      {description}
    </p>
  {/if}
  {#if isProject}
    <p class="text-sm mt-0.5 text-white">
      {#each techl as item}
        <a href={item.techLink} class="text-white hover:underline">
          {item.techName},
        </a>
      {/each}
    </p>
  {/if}
  {#if isAchivement}
    <p class="text-md mt-1 text-white">
      Posted At - {postedAt}
    </p>
  {/if}

  {#if link}
    <div class="flex justify-end mt-1">
      <a
        href={link}
        class="bg-black shadow-lg border-nred border-2 flex items-center space-x-1 hover:scale-110 transform transition duration-500 ease-in-out rounded-md text-base px-2 py-0.5 text-white font-light"
      >
        <p>{linkText}</p>

        <Icon icon="ic:round-arrow-outward" class="w-4 h-4" />
      </a>
    </div>
  {/if}
</div>
