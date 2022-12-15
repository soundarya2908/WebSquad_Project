import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./order-service";

export const findOrderThunk = createAsyncThunk(
    'order/findOrders', async() =>
        await service.findOrders()
)
export const findOrderByDonorIdThunk = createAsyncThunk(
    'order/findOrderByDonorId', async(donorId) =>{
                const orders= await service.findOrderByDonorId(donorId)
                console.log(donorId)
                console.log(orders)
                return orders
    }
)
export const findOrderByCustomerIdThunk = createAsyncThunk(
    'order/findOrderByCustomerId', async(cid) =>
        await service.findOrderByCustomerId(cid)
)
export const createOrderThunk = createAsyncThunk(
    'order/createOrder', async (thunkAPI) => {
        await service.createOrder(thunkAPI)
        console.log(thunkAPI)
    }
)
