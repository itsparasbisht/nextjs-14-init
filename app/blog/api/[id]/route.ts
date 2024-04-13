export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log(req.headers.get("Authorization"));
  return new Response(params.id, {
    headers: {
      "content-type": "application/json",
    },
  });
}
