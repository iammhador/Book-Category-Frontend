/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Key } from "react";
import { Link } from "react-router-dom";

interface Book {
  _id: number;
  id: Key | null | undefined;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
}

interface BookDetailsProps {
  book: Book;
}

export default function AllBookDetails({ book }) {
  const { author, genre, publicationYear, title, _id } = book;

  return (
    <Link to={`/singleBook/${_id}`}>
      <div className="card w-96 bg-gray-800 text-white shadow-xl">
        <div className="card-body text-right">
          <div className="flex -mb-1">
            <p className="text-sm font-light text-left">{genre}</p>
            <p className="text-sm font-light text-right">{publicationYear}</p>
          </div>
          <h3 className="text-lg font-bold text-red-500 text-center">
            {title}
          </h3>
          <p className="text-sm font-normal text-center -mt-2 ">{author}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
