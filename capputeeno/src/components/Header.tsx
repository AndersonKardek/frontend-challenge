"use client";

import styled from "styled-components";

import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  line-height: 150%;
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>search</div>
    </TagHeader>
  );
}
