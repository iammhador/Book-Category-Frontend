/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Key } from "react";
import { useRecentAddedBooksQuery } from "../../redux/features/books/booksApi";
import BookDetails from "../BookDetails";

export default function RecentBooks() {
  const { data } = useRecentAddedBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  return (
    <div className="bg-gray-800 py-10 px-10">
      <h1>Last added 10 Books</h1>
      <div className="grid grid-cols-3 items-center gap-4">
        {data?.map((book: { id: Key | null | undefined }, index: number) => (
          <BookDetails key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
