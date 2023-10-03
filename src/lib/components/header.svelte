<script>
  let isMenuOpen = false;

  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";

  let logo = $page.data.mainData.logo;

  let navlist = [
    {
      name: "Home",
      url: "/#",
    },
    // {
    //   name: "Skills",
    //   url: "#skills",
    // },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    // {
    //   name: "Education",
    //   url: "#education",
    // },
    {
      name: "Achievements",
      url: "#achievements",
    },
  ];
</script>

<div class=" z-40 lg:pb-12 max-w-6xl mx-auto">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8 relative">
    <header class="flex items-center justify-between py-4 md:py-8">
      {#if logo}
        <!-- <span class="text-2xl tracking-wider font-light">Ambuj Shukla</span> -->
        <a href="/">
          <img src={logo} alt="Ambuj Shukla" class=" max-h-7 max-md:max-h-7" />
        </a>
      {:else}
        <a
          href="https://drive.google.com/drive/folders/1C7CTHJQXP_q4ao74-VYb2glp76HC8nKf"
          aria-label="Ambuj Shukla"
          class="hover:underline underline-offset-3 font-light flex items-center gap-2"
        >
          <span class="text-2xl tracking-wider font-light">Ambuj Shukla</span>
        </a>
      {/if}

      <nav
        class="hidden gap-8 lg:flex transition duration-200 items-center text-sm uppercase text-white"
      >
        {#each navlist as item}
          <a
            href={item.url}
            class=" {item.url == $page.url.pathname
              ? 'px-1.5 py-0.5 rounded-md  text-nred '
              : ''}    transition duration-100 hover:text-accent">{item.name}</a
          >
        {/each}

        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
          href="https://drive.google.com/drive/folders/1C7CTHJQXP_q4ao74-VYb2glp76HC8nKf"
          class="flex max-md:hidden items-center rounded-lg bg-black text-white border border-nred px-2 transition-all duration-300 py-1 text-center font-bold text-sm outline-none ring-indigo-300 hover:bg-accent focus-visible:ring md:text-sm"
        >
          RESUME
        </a>
      </nav>

      <button
        type="button"
        on:click={() => (isMenuOpen = !isMenuOpen)}
        class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
      >
        {#if isMenuOpen}
          <Icon icon="ic:round-close" />
        {:else}
          <Icon icon="ri:menu-2-line" />
        {/if}
      </button>
    </header>
  </div>
</div>

<div
  class=" {isMenuOpen
    ? 'translate-x-0  '
    : 'translate-x-full'}   h-screen pt-6 transition-all duration-300 fixed overflow-y-hidden w-full bg-white z-50"
>
  <div class="space-y-6 mx-5">
    <div class=" space-y-4 text-center text-black font-semibold text-2xl">
      {#each navlist as item}
        <div>
          <a href={item.url}>{item.name}</a>
        </div>
      {/each}
      <div>
        <a
          class="flex items-center justify-center gap-2 rounded-lg bg-black px-8 py-3 text-center font-bold text-sm text-white outline-none ring-indigo-300 transition duration-100 hover:bg-accent focus-visible:ring active:bg-black md:text-base"
          href="https://drive.google.com/drive/folders/1C7CTHJQXP_q4ao74-VYb2glp76HC8nKf"
          >RESUME</a
        >
      </div>
    </div>
  </div>
</div>
