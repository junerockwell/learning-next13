"use client";

import { useState } from "react";

export default function AddBook({ refreshBooks }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState("");

  async function handleSubmitNewBook(e) {
    e.preventDefault();
    console.log("handleSubmitNewBook: ", newBookTitle);

    const res = await fetch(`/api/books/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newBookTitle,
        link: "https://www.amazon.com/dp/B0979MGJ5J",
        img: "https://via.placeholder.com/600/92c952",
      }),
    });

    if (res.ok) {
      setNewBookTitle("");
      setModalOpen(false);
      const x = await res.json();
      console.log(x);
      refreshBooks();
    }
  }

  return (
    <div className="mb-2">
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Book
      </button>

      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        <form
          method="dialog"
          className="modal-box"
          onSubmit={handleSubmitNewBook}
        >
          <button
            onClick={() => setModalOpen(false)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            x
          </button>
          <h3 className="font-bold text-lg">Add New Book</h3>
          <input
            type="text"
            value={newBookTitle}
            placeholder="Enter New Book Title"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </dialog>
    </div>
  );
}
