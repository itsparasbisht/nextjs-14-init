import React from "react";

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  console.log(params);
  return <div>Docs</div>;
}
