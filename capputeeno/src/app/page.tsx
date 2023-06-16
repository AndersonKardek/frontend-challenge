"use client";
import { FilterBar } from "@/components/FilterBar";
import { ProductsList } from "@/components/ProductsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>
  );
}
