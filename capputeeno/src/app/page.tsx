"use client";
import { FilterBar } from "@/components/FilterBar";
import { ProductsList } from "@/components/ProductsList";
import { QueryClient } from "@tanstack/react-query";

import { DefaultContainer } from "@/components/DefaultContainer";
import styled from "styled-components";

const PageWrapper = styled.main`
  background-color: var(--bg-primary);
`;

export default function Home() {
  const client = new QueryClient();

  return (
    <PageWrapper>
      <DefaultContainer>
        <FilterBar />
        <ProductsList />
      </DefaultContainer>
    </PageWrapper>
  );
}
