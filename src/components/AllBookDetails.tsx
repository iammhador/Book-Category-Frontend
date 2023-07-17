/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BsCalendarHeart, BsJournalBookmarkFill } from "react-icons/bs";
// import { AiOutlineFileDone } from "react-icons/ai";
// import { usePostListMutation } from "../redux/features/books/booksApi";
// import { useAppSelector } from "../redux/hooks";

// export default function AllBookDetails({ book }) {
//   const { author, genre, publicationYear, title, _id } = book;
//   const { user } = useAppSelector((state) => state.user);
//   const [wishlist, setWishlist] = useState(false);
//   const [currentReading, setCurrentReading] = useState(false);
//   const [complete, setComplete] = useState(false);
//   const [postList, { status }] = usePostListMutation();
//   console.log(status);

//   const toggleWishlist = () => {
//     setWishlist((prevWishlist) => !prevWishlist);
//   };

//   const toggleCurrentReading = () => {
//     setCurrentReading((prevCurrentReading) => !prevCurrentReading);
//   };

//   const toggleComplete = () => {
//     setComplete((prevComplete) => !prevComplete);
//   };

//   const option = {
//     data: {
//       email: user?.email,
//       bookId: _id,
//       wishlist: wishlist,
//       currentReading: currentReading,
//       complete: complete,
//     },
//   };

//   useEffect(() => {
//     postList(option);
//   }, [option, postList]);

//   return (
//     <div className="card w-96 bg-gray-800 text-white shadow-xl">
//       <div className="card-body text-right">
//         <Link to={`/singleBook/${_id}`}>
//           <div className="flex -mb-1">
//             <p className="text-sm font-light text-left">{genre}</p>
//             <p className="text-sm font-light text-right">{publicationYear}</p>
//           </div>
//           <h3 className="text-lg font-bold text-red-500 text-center">
//             {title}
//           </h3>
//           <p className="text-sm font-normal text-center -mt-2 ">{author}</p>
//         </Link>
//         <div className="flex justify-between mt-5">
//           <div onClick={toggleWishlist} className="bg-red-500 rounded-full p-4">
//             <BsCalendarHeart className="text-2xl text-white" />
//           </div>
//           <div
//             onClick={toggleCurrentReading}
//             className="bg-red-500 rounded-full p-4 "
//           >
//             <BsJournalBookmarkFill className="text-2xl text-white" />
//           </div>
//           <div
//             onClick={toggleComplete}
//             className="bg-red-500 rounded-full p-4 "
//           >
//             <AiOutlineFileDone className="text-2xl text-white" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCalendarHeart, BsJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";

export default function AllBookDetails({ book }) {
  const { author, genre, publicationYear, title, _id } = book;
  const [wishlist, setWishlist] = useState(false);
  const [currentReading, setCurrentReading] = useState(false);
  const [complete, setComplete] = useState(false);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem(`book_${_id}`);
    if (storedData) {
      const { wishlist, currentReading, complete } = JSON.parse(storedData);
      setWishlist(wishlist);
      setCurrentReading(currentReading);
      setComplete(complete);
    }
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      `book_${_id}`,
      JSON.stringify({ wishlist, currentReading, complete })
    );
  }, [wishlist, currentReading, complete]);

  const toggleWishlist = () => {
    setWishlist((prevState) => !prevState);
  };

  const toggleCurrentReading = () => {
    setCurrentReading((prevState) => !prevState);
  };

  const toggleComplete = () => {
    setComplete((prevState) => !prevState);
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
            onClick={toggleCurrentReading}
            className={`text-white rounded-full p-4 ${
              currentReading ? "bg-cyan-600" : "bg-red-500"
            }`}
          >
            <BsJournalBookmarkFill className="text-2xl" />
          </div>
          <div
            onClick={toggleComplete}
            className={`text-white rounded-full p-4 ${
              complete ? "bg-cyan-600" : "bg-red-500"
            }`}
          >
            <AiOutlineFileDone className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
