import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  console.log(id);
  return new Response("profile api data");
}

export async function POST(request: Request) {
  const newUser = await request.json();
  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
