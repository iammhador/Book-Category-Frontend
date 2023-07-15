/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

interface IUserCredentials {
  email: string;
  password: string;
}

interface IUser {
  user: {
    email: string | null;
  };
  isError: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: IUser = {
  user: {
    email: null,
  },
  isError: false,
  isLoading: false,
  error: null,
};

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }: IUserCredentials) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user.email;
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: IUserCredentials) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user.email;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
