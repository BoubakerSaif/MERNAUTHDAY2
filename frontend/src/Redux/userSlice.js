import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { setCredentials } from "./authSlice";

export const signin = createAsyncThunk(
  "user/signin",
  async (user, { dispatch, getState, rejectWithValue }) => {
    axios.defaults.withCredentials = true;

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/auth",
        user
      );
      dispatch(setCredentials(data));
      toast.success("Logged In");
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload;
    });
    builder.addCase(signin.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
