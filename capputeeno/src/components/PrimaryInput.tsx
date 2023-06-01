"use cliente";

import { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";

const PrimaryInputStyle = styled.input`
  width: 352px;
  padding: 10px 16px;

  background: var(--bg-secundary);
  border: none;
  border-radius: 8px;

  color: var(--text-dark);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const InputContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

interface PrimaryInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInput(props: PrimaryInputProps) {
  return (
    <InputContainer>
      <PrimaryInputStyle {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
