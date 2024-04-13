type Context = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, { params }: Context) {
  const cookie = req.headers.get("cookie");
  console.log(cookie);

  return new Response(params.id, {
    headers: {
      "content-type": "application/json",
      "set-cookie": "theme=light",
    },
  });
}
