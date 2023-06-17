"use client";
import styled from "styled-components";
import { FilterByPriority } from "./FilterByPriority";
import { FilterByType } from "./FilterByType";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
  }
`;

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
