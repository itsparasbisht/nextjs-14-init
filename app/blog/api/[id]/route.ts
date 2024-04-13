import { NextRequest } from "next/server";

type Context = {
  params: {
    id: string;
  };
};

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: Context) {
  const cookie = req.headers.get("cookie");
  console.log(cookie);

  return new Response(params.id, {
    headers: {
      "content-type": "application/json",
      "set-cookie": "theme=light",
    },
  });
}
