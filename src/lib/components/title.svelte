<script lang="ts">
  export let title: string;
  export let mainClass: string = "text-white";
  export let textClass: string = " text-2xl md:text-4xl";
  export let className: string = "h-1 mt-1 md:h-1 border-0 md:mt-1.5";

  export let isCentered = true;
</script>

<div class="flex flex-col items-center">
  <div class="w-max {mainClass}">
    <h1 class={textClass}>{title}</h1>
    <hr
      class={`${className}  rounded  bg-nred   ${
        isCentered ? "mx-auto w-2/3" : "w-1/3"
      } `}
    />
  </div>
</div>
