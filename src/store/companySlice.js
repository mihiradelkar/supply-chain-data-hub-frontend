import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCompanies } from "../services/api";

export const fetchCompaniesThunk = createAsyncThunk(
  "companies/fetchCompanies",
  async () => {
    const response = await fetchCompanies();
    return response;
  }
);

const companySlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
    search: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompaniesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompaniesThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companies = action.payload;
      })
      .addCase(fetchCompaniesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearch } = companySlice.actions;
export default companySlice.reducer;
