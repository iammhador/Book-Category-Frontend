/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Key } from "react";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";
import AllBookDetails from "../AllBookDetails";
import { Link } from "react-router-dom";

export default function AllBooks() {
  const { data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  console.log(data);

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 bg-gray-800 py-10 px-10">
        <Link
          to="/add-new-books"
          className="text-gray-800 py-4 px-5 bg-white uppercase font-bold text-base  rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out justify-center items-center flex"
        >
          Add new books
        </Link>
      </div>
      <div className="col-span-3">
        <div className="bg-white py-10 px-10">
          <h2 className="text-gray-800 text-center text-3xl font-bold uppercase mb-10">
            Our Collection
          </h2>
          <div className="grid grid-cols-2 items-center justify-items-center gap-8">
            {data?.map(
              (book: { id: Key | null | undefined }, index: number) => (
                <AllBookDetails key={index} book={book} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
