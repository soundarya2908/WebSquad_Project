import { createSlice } from "@reduxjs/toolkit";
import {findOrderByDonorIdThunk} from "../services/order-thunks";

const initialState = {
    orders: [],
    ordersLoading: false,
    previousorders:[],
    previousordersloading:false

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
        [findOrderThunk.rejected]:
            (state) => {
            state.ordersLoading = false
            },
      [findOrderByDonorIdThunk.pending]:
            (state) => {
                state.previousordersloading = true
                state.previousorders = []
            },
        [findOrderByDonorIdThunk.fulfilled]:
            (state, {payload}) => {
            state.previousordersloading = false
                state.previousorders = payload
            },
        [findOrderByDonorIdThunk.rejected]:
            (state) => {
            state.previousordersloading = false
            }
    }
});
export default orderSlice.reducer;