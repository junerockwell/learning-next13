import { NextResponse } from "next/server";
import books from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  console.log("searchparams: ", searchParams);
  const query = searchParams.get("query");

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(query.toLowerCase());
  });

  return NextResponse.json(filteredBooks);
}
