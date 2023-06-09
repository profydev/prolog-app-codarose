import { useRouter } from "next/router";
import { QueryFilters } from "@api/issues.types";

export const useFilters = () => {
  const router = useRouter();
  const filters = {
    status: router.query.status,
    level: router.query.level,
    project: router.query.project,
  } as QueryFilters;
  const handleFilters = (newFilters: QueryFilters) => {
    const query = { ...router.query, ...newFilters };
    router.push({ query });
  };

  return { filters, handleFilters };
};
