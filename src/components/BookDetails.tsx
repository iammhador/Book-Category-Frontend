import React from "react";
import { Key } from "react";

interface Book {
  id: Key | null | undefined;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
}

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const { author, genre, publicationYear, title } = book;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-right">
        <div className="flex -mb-1">
          <p className="text-sm font-light text-left">{genre}</p>
          <p className="text-sm font-light text-right">{publicationYear}</p>
        </div>
        <h3 className="text-lg font-bold text-cyan-700 text-center">{title}</h3>
        <p className="text-sm font-normal text-center -mt-2 ">{author}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default BookDetails;
