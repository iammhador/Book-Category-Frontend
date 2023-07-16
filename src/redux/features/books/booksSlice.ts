import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBook {
  genre: string;
  publicationYear: string;
}

const initialState: IBook = {
  genre: "fiction",
  publicationYear: "2023",
};
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    toggleGenre: (state, { payload }: PayloadAction<string>) => {
      state.genre = payload;
    },
    togglePublicationYear: (state, { payload }: PayloadAction<string>) => {
      state.publicationYear = payload;
    },
  },
});

export const { toggleGenre, togglePublicationYear } = booksSlice.actions;
export default booksSlice.reducer;
