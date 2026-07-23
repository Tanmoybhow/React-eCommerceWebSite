import { createSlice } from '@reduxjs/toolkit'
import { fetchAllProducts } from '../dataThunk/dataThunk'
const initialState = {
  data: [],
  categoryProducts:[],
  loading:false,
  error:null
}

export const dataSlice = createSlice({
  name: 'fetchProducts',
  initialState,
  reducers: {
  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchAllProducts.pending,(state)=>{
         state.loading = true;
         state.error = null;
    })

    .addCase(fetchAllProducts.fulfilled,(state,action)=>{
        state.loading = false;
        state.error = null;
        state.data=action.payload;
    })

    .addCase(fetchAllProducts.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
        
    })


  }
})

// Action creators are generated for each case reducer function
export const { } = dataSlice.actions

export default dataSlice.reducer