import books from "../data.json";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const id = params.id;
  console.log("id: ", id);
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);
  }
  return NextResponse.json({ "Book deleted": id });
}
