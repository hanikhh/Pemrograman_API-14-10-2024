"use client"; // Add this line to make this a Client Component

import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  address: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially, set filtered products to all products
      });
  }, []);

  // Function to filter products by address
  const filterByAddress = (address: string) => {
    const filtered = products.filter((product) => product.address === address);
    setFilteredProducts(filtered);
  };

  // Function to filter products by price greater than min_price
  const filterByPrice = (minPrice: number) => {
    const filtered = products.filter((product) => product.price > minPrice);
    setFilteredProducts(filtered);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* Example Buttons for Filtering */}
          <button onClick={() => filterByAddress("Bandung")}>Filter by Bandung</button>
          <button onClick={() => filterByPrice(10000)}>Filter by Price > 10000</button>
        </div>

        {/* Displaying Filtered Products */}
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} - {product.address}
            </li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Your footer content remains unchanged */}
      </footer>
    </div>
  );
}
