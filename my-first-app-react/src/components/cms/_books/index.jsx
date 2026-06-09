"use client";

import React, { useState } from "react";
import { ListBooks } from "../../../const/bookList";
import { CardCalculates } from "../components/card_calculates";
import { Header } from "./components/header";
import Tabledata from "./components/tabledata";
import BookForm from "./components/form"; 

export function MBooks() {
  const [books, setBooks] = useState(ListBooks);
  const [showModal, setShowModal] = useState(false);

  const handleAddBookSubmit = (newBookData) => {
    setBooks((prevBooks) => [
      ...prevBooks,
      {
        id: prevBooks.length + 1,
        title: newBookData.title,
        author: newBookData.author,
        language: "en-US",
        rating: 0,
        views: 0,
        is_free: newBookData.is_free 
      }
    ]);
    setShowModal(false); 
  };

  return (
    <div className="container-fluid">
      <Header handleAdd={() => setShowModal(true)} />

      <div className="row">
        <div className="col-md-3">
          <CardCalculates
            title={`Total Books`}
            value={books.length}
            icon={`book`}
          />
        </div>
        <div className="col-md-3">
          <CardCalculates
            title={`Free Book`}
            value={books.filter((b) => b.is_free).length}
            icon={`grid`}
          />
        </div>
        <div className="col-md-3">
          <CardCalculates
            title={`Subscribe`}
            value={books.filter((b) => !b.is_free).length} 
            icon={`calendar-event`}
          />
        </div>
        <div className="col-md-3">
          <CardCalculates
            title={`Authors`}
            value={books.filter((b) => b.author).length}
            icon={`people`}
          />
        </div>
      </div>

      <Tabledata data={books} />

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content text-white border border-secondary shadow-lg" style={{ backgroundColor: "#1e1e2f" }}>
              <div className="modal-header border-secondary">
                <h5 className="modal-title fw-bold text-success">Add New Book</h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body" style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
                <BookForm onSubmit={handleAddBookSubmit} onClose={() => setShowModal(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MBooks;