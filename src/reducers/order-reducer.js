import { createSlice } from "@reduxjs/toolkit";
import {
    createOrderThunk,
    findOrderByCustomerIdThunk,
    findOrderByDonorIdThunk,
    findOrderThunk
} from "../services/order-thunk";

const initialState = {
    orders: [],
    ordersLoading: false,
    order: [],
    ordersLoading2: false
}

const orderSlice = createSlice({
   name: "ordersData",
   initialState,
   extraReducers: {
       [findOrderThunk.pending]:
           (state) => {
               state.ordersLoading = true
               state.orders = []
           },
       [findOrderThunk.fulfilled]:
           (state, {payload}) => {
               state.ordersLoading = false
               state.orders = payload
           },
       [findOrderThunk.rejected]: (state) => {
           state.ordersLoading = false
       },

       [findOrderByDonorIdThunk.pending]: (state) => {
           state.ordersLoading2 = true
           state.order = []
       },
       [findOrderByDonorIdThunk.fulfilled]: (state, action) => {
           state.ordersLoading2 = false
           state.order = action.payload
       },
       [findOrderByDonorIdThunk.rejected]: (state) => {
           state.ordersLoading2 = false
       },

       [findOrderByCustomerIdThunk.pending]: (state) => {
           state.ordersLoading2 = true
           state.order = []
       },
       [findOrderByCustomerIdThunk.fulfilled]: (state, action) => {
           state.ordersLoading2 = false
           state.order = action.payload
       },
       [findOrderByCustomerIdThunk.rejected]: (state) => {
           state.ordersLoading2 = false
       },

       [createOrderThunk.fulfilled]: (state, { payload }) => {
           state.loading = false
           state.orders.push({payload})
       },
   }
});
export default orderSlice.reducer;