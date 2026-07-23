import "server-only";

import { client } from "@/sanity/lib/client";
import type { HomePageData } from "@/types/home";

import { HOME_PAGE_QUERY } from "./query";

export async function getHomePageData(): Promise<HomePageData | null> {
  return client.fetch<HomePageData | null>(
    HOME_PAGE_QUERY,
    {},
    {
      cache: "no-store",
    },
  );
}
