import axios from 'axios';

const ORDER_API = 'http://localhost:4000/api/orders';
// const TUITS_API = 'https://tuiter-node-server-app-rak.herokuapp.com/api/tuits';

// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;

export const createOrder = async (order) => {
    const response = await axios.post(ORDER_API, order)
    return response.data;
}
export const findOrders = async () => {
    const response = await axios.get(ORDER_API);
    return response.data;
}
export const findOrderByDonorId = async (did) => {
    const response = await axios.get(`${ORDER_API}/ordersDonor/${did}`)
    return response.data
}
export const findOrderByCustomerId = async (cid) => {
    const response = await axios.get(`${ORDER_API}/ordersCustomer/${cid}`)
    return response.data
}