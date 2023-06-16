"use client";
import styled from "styled-components";
import { FilterByPriority } from "./FilterByPriority";
import { FilterByType } from "./FilterByType";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
