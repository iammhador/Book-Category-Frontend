/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
    getComments: builder.query({
      query: (id) => `/comments/${id}`,
    }),
    getSingleBook: builder.query({
      query: (id) => `/singleBook/${id}`,
    }),
    getEmailMatchedBooks: builder.query({
      query: (email) => `/matched-books/${email}`,
    }),
    createBook: builder.mutation({
      query: ({ data }) => ({
        url: "/add-book",
        method: "POST",
        body: data,
      }),
    }),
    postComments: builder.mutation({
      query: ({ data }) => ({
        url: "/create-comment",
        method: "POST",
        body: data,
      }),
    }),
    updateMatchedBook: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `/update-book/${_id}`, // Assuming you want to include the email as a route parameter
        method: "PATCH",
        body: data,
      }),
    }),
    deleteMatchedBook: builder.mutation({
      query: (id) => ({
        url: `/delete-book/${id}`, // Assuming you want to include the email as a route parameter
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useRecentAddedBooksQuery,
  useGetCommentsQuery,
  useGetSingleBookQuery,
  useGetEmailMatchedBooksQuery,
  useCreateBookMutation,
  usePostCommentsMutation,
  useUpdateMatchedBookMutation,
  useDeleteMatchedBookMutation,
} = booksApi;
