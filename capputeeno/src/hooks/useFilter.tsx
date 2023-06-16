import { FilterContext } from "@/components/contexts/FilterContext";
import { useContext } from "react";

export function useFilter() {
  return useContext(FilterContext);
}
