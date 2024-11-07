import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";
import LoadingCards from "@/components/card/LoadingCards";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const filters = await searchParams;
  // console.log(filters)
  return (
    <section>
      <CategoriesList category={filters.category} search={filters.search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={filters.category}
          search={filters.search}
        />
      </Suspense>
    </section>
  );
}
