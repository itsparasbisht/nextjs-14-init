"use client";

import React from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      Something went wrong! {error.message}
      <button onClick={reset}>Retry</button>
    </div>
  );
}
