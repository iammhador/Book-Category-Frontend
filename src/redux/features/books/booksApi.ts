import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/all-books",
    }),
    recentAddedBooks: builder.query({
      query: () => "/recent-books",
    }),
  }),
});

export const { useGetBooksQuery, useRecentAddedBooksQuery } = booksApi;
