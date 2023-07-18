/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useState } from "react";
import { Link } from "react-router-dom";
import { BsCalendarHeart, BsJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { useAppSelector } from "../redux/hooks";
import {
  useFinishedMutation,
  useReadingMutation,
  useWishlistMutation,
} from "../redux/features/books/booksApi";
import { toast } from "react-hot-toast";
interface IBook {
  author: string;
  genre: string;
  publicationYear: string;
  title: string;
  _id: string;
}
export default function AllBookDetails({ book }: { book: IBook }) {
  const { author, genre, publicationYear, title, _id } = book;
  const { user } = useAppSelector((state) => state.user);
  const [wishlist, setWishlist] = useState(false);
  const [reading, setReading] = useState(false);
  const [finished, setFinished] = useState(false);

  const [wishlistPost] = useWishlistMutation();
  const [readingPost] = useReadingMutation();
  const [finishedPost] = useFinishedMutation();

  const toggleWishlist = () => {
    setWishlist((prevState) => !prevState);
    const option = {
      data: {
        email: user.email,
        id: _id,
        wishlist,
      },
    };
    wishlistPost(option);
    toast.success(`Your wishlist book is - ${title}`);
  };

  const toggleReading = () => {
    setReading((prevState) => !prevState);
    const option = {
      data: {
        email: user.email,
        id: _id,
        reading,
      },
    };
    readingPost(option);
    toast.success(`You're reading - ${title}`);
  };

  const toggleFinished = () => {
    setFinished((prevState) => !prevState);
    const option = {
      data: {
        email: user.email,
        id: _id,
        finished,
      },
    };
    finishedPost(option);
    toast.success(`You have finished - ${title}`);
  };

  return (
    <div className="card w-96 bg-gray-800 text-white shadow-xl">
      <div className="card-body text-right">
        <Link to={`/singleBook/${_id}`}>
          <div className="flex -mb-1">
            <p className="text-sm font-light text-left">{genre}</p>
            <p className="text-sm font-light text-right">{publicationYear}</p>
          </div>
          <h3 className="text-lg font-bold text-red-500 text-center">
            {title}
          </h3>
          <p className="text-sm font-normal text-center -mt-2 ">{author}</p>
        </Link>
        {user?.email && (
          <div className="flex justify-between mt-5">
            <div
              onClick={toggleWishlist}
              className={`text-white rounded-full p-4 ${
                wishlist ? "bg-cyan-600" : "bg-red-500"
              }`}
            >
              <BsCalendarHeart className="text-2xl" />
            </div>
            <div
              onClick={toggleReading}
              className={`text-white rounded-full p-4 ${
                reading ? "bg-cyan-600" : "bg-red-500"
              }`}
            >
              <BsJournalBookmarkFill className="text-2xl" />
            </div>
            <div
              onClick={toggleFinished}
              className={`text-white rounded-full p-4 ${
                finished ? "bg-cyan-600" : "bg-red-500"
              }`}
            >
              <AiOutlineFileDone className="text-2xl" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
