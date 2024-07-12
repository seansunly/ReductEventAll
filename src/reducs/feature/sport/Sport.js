import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  sports: [],
  status: "idle",
  error: null,
};
// export const fetchSport = createAsyncThunk("sports/fetchSport", async () => {
//   const response = await fetch(`https://store.istad.co/api/products`);
//   const data = await response.json();
//   console.log("Product data:", data.results);
//   return data.results;
// });
export const fetchSport = createAsyncThunk("sports/fetchSport", async () => {
  const response = await fetch(`https://store.istad.co/api/products`);
  const data = await response.json();
  console.log("Product data:", data.results);
  console.log("hello what is your name test")
  return data.results;
});
console.log("hello guy ")
export const sportSlice=createSlice({
    name:"sport",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder

          .addCase(fetchSport.pending, (state) => {
            //pending is geting
            state.status = "loding";
          })
          .addCase(fetchSport.fulfilled, (state, action) => {
            // success for get data in api
            state.status = "success";
            state.products = action.payload; //add product to products [] (data trasfer https store in payload)
          })
          .addCase(fetchSport.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })
    }
})
export default sportSlice.reducer;
export const getAllSport=(state) => state.sport.sports;