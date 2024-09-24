"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import LoadingPage from "../loading";
import AddBook from "./AddBook";

async function getBooks() {
  const res = await fetch("http://localhost:3000/api/books");
  const json = await res.json();
  return json;
}

// export default async function Books() { // use async when not using "use client"
export default function Books() {
  // const books = await getBooks(); // can be used if not using "use client"
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingPage />;

  async function handleSubmit(e) {
    console.log(query);
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/books/search?query=${query}`);
    const books = await res.json();

    setBooks(books);
    setLoading(false);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold font-poppins mb-8">Books</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Search Books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-full max-w-xs mr-2"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <AddBook />
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={book.img} alt="Movie" width="200" height="150" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{book.id}</h2>
                <p>{book.title}</p>
                <div className="card-actions justify-end">
                  <Link href={book.link} className="btn btn-primary btn-xs">
                    See in Amazon
                  </Link>
                  <button className="btn btn-error btn-xs">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
