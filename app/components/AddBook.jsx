"use client";

import { useState } from "react";

export default function AddBook({ refreshBooks }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookLink, setNewBookLink] = useState("");
  const [newBookImage, setNewBookImage] = useState("");

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
        link: newBookLink,
        img: newBookImage,
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
          className="modal-box flex flex-col"
          onSubmit={handleSubmitNewBook}
        >
          <button
            onClick={() => setModalOpen(false)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            x
          </button>
          <h2 className="font-bold text-lg mb-4">Add New Book</h2>
          <input
            type="text"
            value={newBookTitle}
            placeholder="Enter New Book Title"
            className="input input-bordered w-full mb-2"
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <input
            type="url"
            value={newBookLink}
            placeholder="Enter New Book Link"
            className="input input-bordered w-full mb-2"
            onChange={(e) => setNewBookLink(e.target.value)}
          />
          <input
            type="url"
            value={newBookImage}
            placeholder="Enter New Book Image Link"
            className="input input-bordered w-full mb-2"
            onChange={(e) => setNewBookImage(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </dialog>
    </div>
  );
}
