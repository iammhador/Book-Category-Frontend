/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AllBookDetails from "../AllBookDetails";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";
import { setSearchFilter } from "../../redux/features/books/booksSlice";

export default function AllBooks() {
  const { data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [isFilteringGenre, setIsFilteringGenre] = useState(false);
  const [isFilteringYear, setIsFilteringYear] = useState(false);
  const { user } = useAppSelector((state: { user: any }) => state.user);
  const dispatch = useAppDispatch();
  const toggleFilteringGenre = () => {
    setIsFilteringGenre((prevState) => !prevState);
  };

  const toggleFilteringYear = () => {
    setIsFilteringYear((prevState) => !prevState);
  };

  let booksData = data || [];

  //@ Search filters code :
  const searchFilter = useAppSelector((state) => state.books.searchFilter);
  const handleSearchFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchFilter(event.target.value));
  };

  //@ Apply the search filter
  if (searchFilter) {
    booksData = booksData.filter((book: any) => {
      const titleMatches = book.title
        .toLowerCase()
        .includes(searchFilter.toLowerCase());
      const authorMatches = book.author
        .toLowerCase()
        .includes(searchFilter.toLowerCase());
      const genreMatches = book.genre
        .toLowerCase()
        .includes(searchFilter.toLowerCase());
      const publicationYearMatches = book.publicationYear
        .toString()
        .includes(searchFilter);

      return (
        titleMatches || authorMatches || genreMatches || publicationYearMatches
      );
    });
  }

  //@ Sorting logic
  let sortedBooksData = [...booksData];
  sortedBooksData.sort((a: any, b: any) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  //@ Apply the genre filter if enabled
  if (isFilteringGenre) {
    sortedBooksData = sortedBooksData.filter((item: any) => {
      if (genre && item.genre !== genre) {
        return false;
      }
      return true;
    });
  }

  const handleChangeGenre = (genre: string) => {
    setGenre(genre);
  };

  const uniqueGenres =
    data && Array.from(new Set(data.map((item: any) => item.genre))).sort();

  //@ Apply the publication year filter if enabled
  if (isFilteringYear) {
    sortedBooksData = sortedBooksData.filter((item: any) => {
      if (publicationYear && item.publicationYear !== publicationYear) {
        return false;
      }
      return true;
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

  console.log(data);
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 bg-gray-800 py-10 px-10">
        <div>
          <input
            type="text"
            value={searchFilter}
            onChange={handleSearchFilterChange}
            placeholder="Search..."
          />
        </div>
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
          </div>
        )}

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
      <div className="col-span-3">
        <div className="bg-white py-10 px-10">
          <h2 className="text-gray-800 text-center text-3xl font-bold uppercase mb-10">
            Our Collection
          </h2>

          <div className="grid grid-cols-2 items-center justify-items-center gap-8">
            {sortedBooksData.map((book: any, index: number) => (
              <AllBookDetails key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
