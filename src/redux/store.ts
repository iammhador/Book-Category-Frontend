import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import useReducer from "./features/users/usersSlice";
import bookReducer from "./features/books/booksSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
    books: bookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
