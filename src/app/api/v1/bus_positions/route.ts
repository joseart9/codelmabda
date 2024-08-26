import { getDocument, updateDocument } from "@/server/functions";

export async function POST(request: Request): Promise<Response> {
  const req = await request.json();
  const serverResponse = await updateDocument("bus_positions", req);

  return new Response(JSON.stringify(serverResponse), {
    status: 500,
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function GET(): Promise<Response> {
  const data = await getDocument("bus_positions");
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  });
}
