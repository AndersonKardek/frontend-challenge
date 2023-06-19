"use client";

import styled from "styled-components";

import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInput } from "./PrimaryInput";
import { CartControl } from "./CartControl";

import { useFilter } from "@/hooks/useFilter";
import { DefaultContainer } from "./DefaultContainer";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 4rem;
  line-height: 150%;
`;

export function Header(props: HeaderProps) {
  const { search, setSearch } = useFilter();
  return (
    <DefaultContainer>
      <TagHeader>
        <Logo className={sairaStencil.className}>Capputeeno</Logo>
        <div>
          <PrimaryInput
            value={search}
            handleChange={setSearch}
            placeholder="Procurando por algo específico?"
          />
          <CartControl />
        </div>
      </TagHeader>
    </DefaultContainer>
  );
}
