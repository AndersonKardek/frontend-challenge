import styled from "styled-components";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "./types/PriorityTypes";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: transparent;
    color: var(--text-dark);
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    cursor: pointer;
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  top: 100%;
  width: 176px;
  padding: 12px 16px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;

  li {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;
export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };
  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar Por <ArrowDownIcon />
      </button>

      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais Vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
