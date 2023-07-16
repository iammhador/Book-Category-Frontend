/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

import { Key, useState } from "react";

import AllBookDetails from "../AllBookDetails";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";

export default function AllBooks() {
  const { data, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  const { user } = useAppSelector((state: { user: any }) => state.user);

  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [isFilteringGenre, setIsFilteringGenre] = useState(false);
  const [isFilteringYear, setIsFilteringYear] = useState(false);

  const toggleFilteringGenre = () => {
    setIsFilteringGenre((prevState) => !prevState);
  };
  const toggleFilteringYear = () => {
    setIsFilteringYear((prevState) => !prevState);
  };

  let booksData = data || [];
  console.log(booksData);

  //@ Filter for book genre:
  if (isFilteringGenre) {
    booksData = booksData
      .filter((item: any) => {
        if (genre && item.genre !== genre) {
          return false;
        }
        return true;
      })
      .sort((a: any, b: any) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
  }
  const handleChangeGenre = (genre: string) => {
    setGenre(genre);
  };

  const uniqueGenres =
    data && Array.from(new Set(data.map((item: any) => item.genre))).sort();

  //@ FIlter for publicationYear:
  if (isFilteringYear) {
    booksData = booksData
      .filter((item: any) => {
        if (publicationYear && item.publicationYear != publicationYear) {
          return false;
        }
        return true;
      })
      .sort((a: any, b: any) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
  }

  const handleChangePublicationYear = (year: string) => {
    setPublicationYear(year);
  };

  const uniqueYear =
    data &&
    Array.from(new Set(data.map((item: any) => item.publicationYear))).sort(
      (a, b) => b - a
    );
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 bg-gray-800 py-10 px-10">
        {user.email && (
          <div>
            <Link
              to="/add-new-books"
              className="text-gray-800 py-4 px-5 bg-white uppercase font-bold text-base  rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out justify-center items-center flex mb-5"
            >
              Add new books
            </Link>
            <Link
              to="/your-added-books"
              className="text-gray-800 py-4 px-5 bg-white uppercase font-bold text-base  rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out justify-center items-center flex"
            >
              Your added books
            </Link>
            <div className="flex justify-start my-5">
              <button
                onClick={toggleFilteringGenre}
                className="text-gray-800 py-2 px-3 bg-white uppercase font-bold text-base rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out justify-center items-center flex mr-2"
              >
                {isFilteringGenre ? "Clear" : "Filter"}
              </button>
              {isFilteringGenre && (
                <select
                  value={genre}
                  onChange={(e) => handleChangeGenre(e.target.value)}
                  className="text-gray-800 py-2 px-3 bg-white uppercase font-bold text-base rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
                >
                  <option value="All">All Genres</option>
                  {[...uniqueGenres].map((uniqueGenre: any, index: any) => (
                    <option key={index} value={uniqueGenre}>
                      {uniqueGenre}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="flex justify-start mb-5">
              <button
                onClick={toggleFilteringYear}
                className="text-gray-800 py-2 px-3 bg-white uppercase font-bold text-base rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out justify-center items-center flex mr-2"
              >
                {isFilteringYear ? "Clear" : "Filter"}
              </button>
              {isFilteringYear && (
                <select
                  onChange={(e) => handleChangePublicationYear(e.target.value)}
                  className="text-gray-800 py-2 px-3 bg-white uppercase font-bold text-base rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
                >
                  <option value="">All Years</option>
                  {[...uniqueYear].map((uniqueYear: any, index: any) => (
                    <option key={index} value={uniqueYear}>
                      {uniqueYear}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="col-span-3">
        <div className="bg-white py-10 px-10">
          <h2 className="text-gray-800 text-center text-3xl font-bold uppercase mb-10">
            Our Collection
          </h2>

          <div className="grid grid-cols-2 items-center justify-items-center gap-8">
            {booksData.map(
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
