import books from "./data.json";

import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request) {
  return NextResponse.json(books);
}

export async function POST(request) {
  const { title, link, img } = await request.json();
  const id = uuidv4(); //books.length + 1,
  const newBook = {
    id,
    title,
    link,
    img,
  };

  books.push(newBook);
  return NextResponse.json({ msg: "Book added successfully", id });
}
