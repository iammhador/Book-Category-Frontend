import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
}

interface BookStore {
  books: IBook[];
  searchFilter: string;
}

const initialState: BookStore = {
  books: [],
  searchFilter: "",
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBook: (state, { payload }: PayloadAction<IBook[]>) => {
      state.books = payload;
    },
    setSearchFilter: (state, { payload }: PayloadAction<string>) => {
      state.searchFilter = payload;
    },
  },
});

export const { setBook, setSearchFilter } = booksSlice.actions;
export default booksSlice.reducer;
