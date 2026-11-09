import { products, categories } from "@/data/products";
import ProductsClient from "./ProductsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products | Touch N Feel Office Systems",
  description: "Browse our complete catalog of premium office chairs, workstation chairs, and visitor chairs.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">All Products</h1>
        <p className="text-muted-foreground">
          Discover our extensive range of high-quality office furniture designed for comfort and durability.
        </p>
      </div>

      <ProductsClient initialProducts={products} categories={categories} />
    </div>
  );
}
