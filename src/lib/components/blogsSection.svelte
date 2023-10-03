<script lang="ts">
  import { page } from "$app/stores";

  import {
    responsiveWidth,
    spacingMargin,
    spacingMargin3,
  } from "$lib/constant";
  // import { type Blog, blogCollection } from "$lib/firebase";

  // import { query, where, getDocs } from "firebase/firestore";
  // import BlogCard from "./BlogCard.svelte";

  import Title from "./title.svelte";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import { onMount } from "svelte";
  import type { PorfolioData } from "$lib/types";
  import BaseCard from "./BaseCard.svelte";

  // let usergblogs: Blog[] = [];
  // let showMoreEnabled = false;
  // async function getBlogsForUsers(userEmails: string[]) {
  //   let userblogs: Blog[] = [];
  //   for (const email of userEmails) {
  //     const q = query(
  //       blogCollection,
  //       where("authorEmail", "==", email),
  //       where("published", "==", true)
  //     );
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       userblogs.push({ id: doc.id, ...doc.data() });
  //     });
  //   }
  //   return userblogs;
  // }

  // onMount(() => {
  //   // console.log("data", data.BlogsData.featuredBlog);
  //   getBlogsForUsers(["ambujs1234@gmail.com"])
  //     .then((blogsByUser) => {
  //       usergblogs = blogsByUser;
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching blogs:", error);
  //     });
  // });
  const Portfolio: PorfolioData = $page.data.mainData;

  let blogList = Portfolio.blogList;
</script>

<div id="blogs" class="mx-auto {responsiveWidth} mt-24">
  <Title title="Tech Blogs" />

  <Splide
    options={{
      arrows: false,
      pagination: false,
      type: "loop",
      speed: 800,
      perPage: 3,
      breakpoints: {
        "640": {
          perPage: 1,
        },
        "768": {
          perPage: 3,
        },
        "1024": {
          perPage: 3,
        },
      },
      gap: "3rem",
      autoplay: true,
      interval: 2000,
      perMove: 1,
    }}
    class="flex  {spacingMargin3} md:{spacingMargin}  hover:transition-all  mx-auto duration-300 flex-wrap gap-6 md:gap-9 justify-center align-middle"
  >
    {#each blogList as l}
      <SplideSlide>
        <!-- <BlogCard
          slug={l.slug}
          title={l.title}
          image={l.image}
          author={l.authorName}
          publishedDate={l.createdAt}
          authorSlug={l.authorSlug ?? "hacktivspace"}
        /> -->

        <BaseCard
          title={l.name}
          description=""
          link={l.link}
          image={l.image}
          isBlog={true}
        />
      </SplideSlide>
    {/each}
  </Splide>
</div>
