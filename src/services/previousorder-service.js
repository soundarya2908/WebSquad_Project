import axios from 'axios';
const PREVIOUSORDER_API_URL = 'http://localhost:4000/api/orders/ordersCustomer';


export const findPreviousOrdersByCustomername  = async (customerUserName)     => {
 const response = await axios.get(`${PREVIOUSORDER_API_URL}/${customerUserName}`);
 const orders = response.data;
 console.log(customerUserName)
 console.log(orders)
 return orders;
 
}
