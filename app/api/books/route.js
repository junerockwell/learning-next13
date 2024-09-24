import books from "./data.json";

import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(books);
}

export async function POST(request) {
  const { title, link, img } = await request.json();
  const newBook = {
    id: books.length + 1,
    title,
    link,
    img,
  };

  books.push(newBook);
  return NextResponse.json("Book added successfully");
}
