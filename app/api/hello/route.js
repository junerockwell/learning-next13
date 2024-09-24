export async function GET(request) {
  return new Response({ key: "Hello World" });
}

export async function POST(request) {
  console.log("x: ", request.body);
  return new Response(request.body);
}
