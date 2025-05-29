import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk("products/fetch", async(_ ,{rejectWithValue}) => {
    try{
       const response = await axios.get("https://fakestoreapi.com/products")
        if(response.status !== 200){
            throw new Error("Failed to fetch products");
        }
       return response.data
    }catch(error){
       return rejectWithValue(error.message || "Something went wrong");
    }
})