"use client";
import { FilterBar } from "@/components/FilterBar";
import { ProductsList } from "@/components/ProductsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import styles from "./page.module.css";
import { Container } from "@/components/Container";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <Container>
          <FilterBar />
          <ProductsList />
        </Container>
      </main>
    </QueryClientProvider>
  );
}
