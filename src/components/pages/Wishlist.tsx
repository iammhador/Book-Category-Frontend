/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Helmet } from "react-helmet-async";
import { useGetWishlistQuery } from "../../redux/features/books/booksApi";
import { useAppSelector } from "../../redux/hooks";
import SingleWishlistDetails from "../SingleWishlistDetails";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function wishlist() {
  const { user } = useAppSelector((state) => state.user);

  const { data, isError, isLoading } = useGetWishlistQuery(user?.email, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Best Readers - Your Wishlist Books</title>
      </Helmet>
      <h2 className="text-3xl text-center font-bold text-cyan-800 uppercase my-20 ">
        Your Wishlist
      </h2>

      <div className="grid grid-cols-3 gap-5 w-4/5 mx-auto">
        {user?.email &&
          data.map((wishlist: any) => (
            <SingleWishlistDetails key={wishlist._id} wishlist={wishlist} />
          ))}
      </div>
    </div>
  );
}
