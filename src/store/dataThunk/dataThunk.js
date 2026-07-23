import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "fetchProducts/fetchAllProducts",
  async () => {
    try {
      const data = await axios.get(
        "https://fakestoreapi.noksha.dev/api/products",
      );
      return data.data.data;
    } catch (error) {
      return error.message;
    }
  },
);


export const fetchCategoryProducts = createAsyncThunk(
  "fetchProducts/fetchCategoryProducts",
  async () => {
    try {
      const data = await axios.get(
        "https://fakestoreapi.noksha.dev/api/products",
      );
      return data.data.data;
    } catch (error) {
      return error.message;
    }
  },
);

