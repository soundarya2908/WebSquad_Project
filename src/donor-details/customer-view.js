import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import OrderItem from '../inventory/order-item';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderThunk } from '../services/order-thunks';

const CustomerViewOfDonor = ({ donor }) => {
  const { currentUser } = useSelector((state) => state.users);
  const user = currentUser.userName;
  const [cart, setCart] = useState({});

  const [order, setOrder] = useState(false);
  let food = donor.inventory;
  // console.log('donor: ', donor);
  // console.log('donor.inventory: ', donor.inventory);
  const dispatch = useDispatch();

  const addOrderHandler = (key, avail) => {
    const quant = document.getElementById(key).value;
    if (quant !== '' && quant <= avail && quant !== 0) {
      setCart({ ...cart, [key]: quant });
    }
    setOrder(true);
  };

  const UpdateOrderHandler = () => {
    return (
      <>
      <div className="col-3">
        <div className="card">
          <h5>Your Cart</h5>
          <br />
          <OrderItem order={cart} />
          <br />
          <Button className="btn-dark" onClick={placeOrderHandler}>
            Place order
          </Button>
        </div>
      </div>
      </>
    );
  };

  const placeOrderHandler = () => {
    const newOrder = {
      donorUserName: donor.userName,
      customerUserName: user,
      status: 'COMPLETED',
      orderList: cart,
    };
    dispatch(createOrderThunk(newOrder));
  };

  return (
    <div className="ps-5 pe-5 row mt-2">
      <div className="col-9">
        <div className="image-container">
          <div className="main_image">
            <img
              className="w-100 rounded-2"
              src={`/images/${donor.coverPhoto}`}
              alt="landing background"
            />
          </div>
          <div className="overlay_image">
            <img
              className="w-100 rounded-pill float-start"
              src={`/images/${donor.profilePhoto}`}
              alt="profile"
            />
          </div>
        </div>

        <div className="d-inline-block float-start text-start w-100">
          <h3>{donor.name}</h3>
          <div className="row d-block">
            <span>{donor.location}</span> . <span>{donor.rating}</span>
          </div>
          <div className="row d-block">
            <span>Address</span> . <span>Link for maps</span>
          </div>
        </div>
        <br />
        <div className="row d-block text-start">
          <h5>Inventory Available</h5>
        </div>
        <div className="text-start">
          <div className="row">
            {Object.keys(food).map((key, i) => (
              <div key={i} className="p-1 col-12 col-lg-6">
                <div className="card text-start p-1 pt-0">
                  <div className="row">
                    <div className="col-8">{key}</div>
                    <div className="col-4">
                      <span className="float-end">Available: {food[key]}</span>
                    </div>
                  </div>
                  <div className="row">
                    <form className="col-8">
                      <label htmlFor={key}>Select: </label>
                      <input id={key} type="number" max={food[key]} min="0" />
                    </form>
                    <div className="col-4">
                      <button
                        className="rounded-pill float-end"
                        onClick={() => addOrderHandler(key, food[key])}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {order && <UpdateOrderHandler />}
    </div>
  );
};
export default CustomerViewOfDonor;
