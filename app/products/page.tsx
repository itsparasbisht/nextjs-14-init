import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>

      <h2>
        <Link href="products/1"> Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2" replace>
          Product 2
        </Link>
      </h2>
      <h2>
        <Link href="products/3"> Product 3</Link>
      </h2>
    </div>
  );
}
