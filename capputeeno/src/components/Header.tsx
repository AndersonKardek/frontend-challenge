"use client";

import styled from "styled-components";

import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInput } from "./PrimaryInput";
import { CartControl } from "./CartControl";
import { Container } from "./Container";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  line-height: 150%;
`;

export function Header(props: HeaderProps) {
  const { search, setSearch } = useFilter();
  return (
    <Container>
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
    </Container>
  );
}
