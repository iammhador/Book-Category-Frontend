/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Key } from "react";
import { useRecentAddedBooksQuery } from "../../redux/features/books/booksApi";
import BookDetails from "../BookDetails";
import { Helmet } from "react-helmet-async";

export default function RecentBooks() {
  const { data } = useRecentAddedBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  return (
    <div className="bg-gray-800 py-10 px-10">
      <Helmet>
        <title>Best Readers - Books make us happy</title>
      </Helmet>
      <h2 className="text-white text-center text-3xl font-bold uppercase mb-10">
        Latest Books
      </h2>
      <div className="grid grid-cols-3 items-center justify-items-center gap-8">
        {data?.map((book: { id: Key | null | undefined }, index: number) => (
          <BookDetails key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
