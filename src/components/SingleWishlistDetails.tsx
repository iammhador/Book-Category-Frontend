/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Link } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/books/booksApi";

export default function SingleWishlistDetails({ wishlist }) {
  const { id } = wishlist;
  const { data, isLoading, isError } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  if (!data) {
    return null;
  }

  const { genre, publicationYear, author, title, _id } = data;

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
}
