import React from "react";
import { Button } from "../../ui/button";

const ListBooks = [
    {
    id: 1, 
    title: "Laskar Pelangi",
    img: 'laskarpelangi.png',
    author: "Andrea Hirata",
    is_free: true, 
    sinopsis: "A heartwarming story of friendship and growing up in Indonesia.",
    rating: 4.5, 
    views: 1000
},
{
    id: 2, 
    title: "Negeri 5 Menara",
    img: 'negeri5menara.png', 
    author: "Ahmad Fuadi",
    is_free: false, 
    sinopsis: "A gripping tale of racial injustice and childhood innocence.",
    rating: 4.8, 
    views: 1500
},
{
    id: 3, 
    title: "Perahu Kertas",
    img: 'perahukertas.png', 
    author: "Dee Lestari",
    is_free: false, 
    sinopsis: "A dystopian social science fiction novel.",
    rating: 4.7, 
    views: 2000
},
{
    id: 4, 
    title: "Tenggelamnya Kapal Van Der Wijck",
    img: 'TKvdw.png',
    author: "Hamka",
    is_free: true, 
    sinopsis: "A romantic novel of manners.",
    rating: 4.6, 
    views: 1200
},
{
    id: 5, 
    title: "Don Quixote",
    img: 'donquixote.png',
    author: "Miguel de Cervantes",
    is_free: true, 
    sinopsis: "A fantasy adventure novel.",
    rating: 4.9, 
    views: 1800
},
{
    id: 6, 
    title: "Kisah Dua Kota",
    img: 'kisah2kota.png',
    author: "Charles Dickens",
    is_free: false,
    sinopsis: "A gripping tale of obsession and revenge.",
    rating: 4.7,
    views: 1600
},
];

export function FeaturedBooksSection() {
    return (
        <section id="books" className="py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <h2 className="fw-bold text-center">Featured Books</h2>
                        <p className="text-center text-muted">
                            Handpicked selections just for you
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {ListBooks.map((book) => (
                        <div key={book.id} className="col-md-6 col-lg-3">
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
const BookCard = ({ book }) => {
    const { title, author, is_free, rating, img } = book;

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <i
                key={i}
                className={`bi bi-star${i < Math.floor(rating) ? "-fill" : ""} text-warning`}
            ></i>
        ));
    };

    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
                <div className="bg-light p-4 mb-3 rounded">
                    {img ? (
                        <img
                            src={`/books/${img}`}
                            alt={title}
                            className="img-fluid"
                            style={{ maxHeight: "150px", objectFit: "cover" }}
                        />
                    ) : (
                        <i
                            className="bi bi-book-half"
                            style={{ fontSize: "4rem", color: "#6c757d" }}
                        ></i>
                    )}
                </div>

                <h5 className="card-title fw-bold">{title}</h5>
                <p className="text-muted small mb-2">by {author}</p>

                <div className="mb-2">
                    {renderStars(rating)}
                    <span className="ms-2 text-muted small">({rating})</span>
                </div>
            </div>
        </div>
    );
};