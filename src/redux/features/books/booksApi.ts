/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/all-books",
    }),
    recentAddedBooks: builder.query({
      query: () => "/recent-books",
    }),
    getSingleBook: builder.query({
      query: (id) => `/singleBook/${id}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useRecentAddedBooksQuery,
  useGetSingleBookQuery,
} = booksApi;
