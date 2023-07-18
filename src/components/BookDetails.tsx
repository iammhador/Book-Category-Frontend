/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";
import { Key } from "react";
import { Link } from "react-router-dom";

interface Book {
  id: Key | null | undefined;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  _id: string;
}

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const { author, genre, publicationYear, title, _id } = book;
  return (
    <Link to={`/singleBook/${_id}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-right">
          <div className="flex -mb-1">
            <p className="text-sm font-light text-left">{genre}</p>
            <p className="text-sm font-light text-right">{publicationYear}</p>
          </div>
          <h3 className="text-lg font-bold text-cyan-700 text-center">
            {title}
          </h3>
          <p className="text-sm font-normal text-center -mt-2 ">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookDetails;
