import { client, sanityQuery } from "$lib/sanity";
import type { PorfolioData } from "$lib/types";

/** @type {import('./$types').PageLoad} */

export async function load() {
  const mainData: PorfolioData[] = await client.fetch(sanityQuery);

  return {
    mainData: mainData[0],
  };
}
