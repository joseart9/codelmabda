import { getDocument, updateDocument } from "@/server/functions";

export async function POST(request: Request): Promise<Response> {
  const req = await request.json();
  const serverResponse = await updateDocument("statpos", req);

  return new Response(JSON.stringify(serverResponse), {
    status: 500,
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function GET(): Promise<Response> {
  const data = await getDocument("statpos");
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  });
}
