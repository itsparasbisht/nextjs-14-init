"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  params: { productId: string };
};

export default function ProductDetails({ params }: Props) {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }

  return (
    <div>
      <h1>Product {params.productId}</h1>
      <button onClick={handleClick}>Order</button>
    </div>
  );
}
