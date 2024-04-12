export async function GET() {
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
