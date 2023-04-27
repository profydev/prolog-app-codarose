import { axios } from "./axios";
import type { Issue, QueryFilters } from "./issues.types";
import type { Page } from "@typings/page.types";
import qs from "qs";
const ENDPOINT = "/issue";

export async function getIssues(
  page: number,
  filters?: QueryFilters,
  options?: { signal?: AbortSignal }
) {
  const { data } = await axios.get<Page<Issue>>(ENDPOINT, {
    params: { page, ...filters },
    signal: options?.signal,
  });
  return data;
}
