"use client";
import { FilterBar } from "@/components/FilterBar";
import { ProductsList } from "@/components/ProductsList";
import { QueryClient } from "@tanstack/react-query";

import styles from "./page.module.css";
import { Container } from "@/components/Container";

export default function Home() {
  const client = new QueryClient();
  return (
    <main className={styles.main}>
      <Container>
        <FilterBar />
        <ProductsList />
      </Container>
    </main>
  );
}
