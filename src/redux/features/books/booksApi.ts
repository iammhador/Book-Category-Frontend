/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/all-books",
      providesTags: ["books"],
    }),
    recentAddedBooks: builder.query({
      query: () => "/recent-books",
      providesTags: ["books"],
    }),
    getComments: builder.query({
      query: (id) => `/comments/${id}`,
      providesTags: ["comments"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/singleBook/${id}`,
    }),
    getEmailMatchedBooks: builder.query({
      query: (email) => `/matched-books/${email}`,
    }),
    getWishlist: builder.query({
      query: (email) => `/wishlist/${email}`,
      providesTags: ["wishlist"],
    }),
    getReading: builder.query({
      query: (email) => `/reading/${email}`,
      providesTags: ["reading"],
    }),
    getFinished: builder.query({
      query: (email) => `/finished/${email}`,
      providesTags: ["finished"],
    }),
    createBook: builder.mutation({
      query: ({ data }) => ({
        url: "/add-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    postComments: builder.mutation({
      query: ({ data }) => ({
        url: "/create-comment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    wishlist: builder.mutation({
      query: ({ data }) => ({
        url: "/wishlist",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    reading: builder.mutation({
      query: ({ data }) => ({
        url: "/reading",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["reading"],
    }),
    finished: builder.mutation({
      query: ({ data }) => ({
        url: `/finished`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["finished"],
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
  useGetWishlistQuery,
  useGetReadingQuery,
  useGetFinishedQuery,
  useCreateBookMutation,
  usePostCommentsMutation,
  useWishlistMutation,
  useReadingMutation,
  useFinishedMutation,
  useUpdateMatchedBookMutation,
  useDeleteMatchedBookMutation,
} = booksApi;
