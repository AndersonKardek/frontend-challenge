"use client";
import { useFilter } from "@/hooks/useFilter";
import styled from "styled-components";
import { FilterType } from "./types/FilterTypes";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 40px;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 1.2rem;
  line-height: 2.2rem;
  text-align: center;
  color: var(--text-dark);
  text-transform: uppercase;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    border-bottom: 4px solid transparent;
    transform: scaleX(0);
    transition: transform 400ms ease-in-out, border-color 400ms ease-in-out;
  }

  &:after {
    transform: scaleX(1);
  }

  ${(props) =>
    props.selected &&
    `
    font-weight: 700;
    &:after {
      border-color: var(--orange-low);
      
    }
    
  `}

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 1.6rem;
  }
`;

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os Produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}
