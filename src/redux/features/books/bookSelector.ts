import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectBooks = (state: RootState) => state.books.books;
const selectSearchFilter = (state: RootState) => state.books.searchFilter;

export const selectFilteredBooks = createSelector(
  [selectBooks, selectSearchFilter],
  (books, searchFilter) => {
    if (!searchFilter) {
      return books;
    }

    const normalizedFilter = searchFilter.toLowerCase().trim();
    return books.filter(
      (book: { genre: string; author: string; title: string }) =>
        book.genre.toLowerCase().includes(normalizedFilter) ||
        book.author.toLowerCase().includes(normalizedFilter) ||
        book.title.toLowerCase().includes(normalizedFilter)
    );
  }
);
