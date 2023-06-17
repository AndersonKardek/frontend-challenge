"use cliente";

import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";

const PrimaryInputStyle = styled.input`
  width: 100%;
  padding: 10px 16px;

  background: var(--bg-secundary);
  border: none;
  border-radius: 0.8rem;

  color: var(--text-dark);
  font-family: inherit;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 28.2rem;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 35.2rem;
  }
`;

interface PrimaryInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInput(props: PrimaryInputProps) {
  return (
    <InputContainer>
      <PrimaryInputStyle
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
}
