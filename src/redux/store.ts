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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
