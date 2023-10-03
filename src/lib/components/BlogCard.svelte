<script lang="ts">
  export let title: string;
  export let image: string;
  export let slug: string;

  export let author: string = "HacktivSpace";
  export let authorSlug: string;

  export let publishedDate: Date;

  function formatDate(date: any) {
    const formatDate = new Date(
      date.seconds * 1000 + date.nanoseconds / 1000000
    );

    return formatDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  //console.log(image);
</script>

<a href="/hacktivblog/{slug}">
  <div class="rounded-xl pb-2 col-span-1">
    <div class="w-full">
      <img
        class="rounded-xl border-nred border-4"
        src={image}
        alt="HacktivSpace"
      />
    </div>

    <h1 class="font-bold text-2xl mt-1 text-white">{title}</h1>
    <div class="flex justify-between items-center">
      <a href="/hacktivblog/user/{authorSlug}">
        <p class="text-sm text-[#BD9494]">
          By: {author}
        </p>
      </a>
      <p class="text-sm text-[#BD9494]">
        {formatDate(publishedDate)}
      </p>
    </div>
  </div>
</a>
